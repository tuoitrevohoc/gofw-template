package main

import (
	"net/http"

	"github.com/redis/go-redis/v9"
	"github.com/tuoitrevohoc/gofw-template/backend/gen/go/ent"
	"github.com/tuoitrevohoc/gofw-template/backend/internal/resolvers"
	"github.com/tuoitrevohoc/gofw/packages/gofw"
	"github.com/tuoitrevohoc/gofw/packages/pubsub"
	"go.uber.org/zap"

	_ "github.com/lib/pq"
)

type config struct {
	DBURL    string `mapstructure:"db_url"`
	Port     string `mapstructure:"port"`
	RedisURL string `mapstructure:"redis_url"`
}

func main() {

	manager := gofw.NewServiceManager()
	logger := manager.Logger()

	cfg, err := gofw.LoadConfig[config]()

	if err != nil {
		logger.Fatal("failed to load config", zap.Error(err))
	}

	entClient, err := ent.Open("postgres", cfg.DBURL)

	if err != nil {
		logger.Fatal("failed to create ent client", zap.Error(err))
	}

	redisClient := redis.NewClient(&redis.Options{
		Addr: cfg.RedisURL,
	})

	countPublisher := pubsub.NewRedisPublisher[int](redisClient)
	countSubscriber := pubsub.NewRedisSubscriber[int](redisClient)

	if err != nil {
		logger.Fatal("failed to create redis client", zap.Error(err))
	}

	server := gofw.NewHttpServer(manager, cfg.Port)
	handler := resolvers.NewHandler(entClient, countPublisher, countSubscriber)

	server.AddHandler("/graphql", handler)
	server.AddHandler("/graphql/sse", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		flusher, ok := w.(http.Flusher)
		if !ok {
			http.Error(w, "Streaming unsupported!", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "text/event-stream")
		w.Header().Set("Cache-Control", "no-cache")
		flusher.Flush()
	}))
	server.UseGraphQLPlayground()

	manager.AddService(server)

	err = manager.Run()
	if err != nil {
		logger.Fatal("failed to application", zap.Error(err))
	}
}
