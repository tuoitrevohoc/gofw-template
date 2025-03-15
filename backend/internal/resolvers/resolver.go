package resolvers

import (
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/tuoitrevohoc/gofw-template/backend/gen/go/ent"
	gql "github.com/tuoitrevohoc/gofw-template/backend/gen/go/graphql"
	"github.com/tuoitrevohoc/gofw/packages/gofw"
	"github.com/tuoitrevohoc/gofw/packages/pubsub"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	entClient       *ent.Client
	countPublisher  pubsub.Publisher[int]
	countSubscriber pubsub.Subscriber[int]
	count           int
}

func NewHandler(entClient *ent.Client, countPublisher pubsub.Publisher[int], countSubscriber pubsub.Subscriber[int]) *handler.Server {

	resolver := &Resolver{
		entClient:       entClient,
		countPublisher:  countPublisher,
		countSubscriber: countSubscriber,
	}

	return gofw.GQLHandler(
		gql.NewExecutableSchema(
			gql.Config{
				Resolvers: resolver,
			},
		),
	)
}
