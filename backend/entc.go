//go:build ignore

package main

import (
	"log"

	"entgo.io/contrib/entgql"
	"entgo.io/ent/entc"
	"entgo.io/ent/entc/gen"
)

func main() {
	ex, err := entgql.NewExtension(
		entgql.WithConfigPath("gqlgen.yml"),
		entgql.WithSchemaPath("schema/graphql/ent.graphql"),
		entgql.WithSchemaGenerator(),
	)
	if err != nil {
		log.Fatalf("creating entgql extension: %v", err)
	}

	opts := []entc.Option{
		entc.Extensions(ex),
		entc.FeatureNames("schema/migrate"),
		entc.FeatureNames("entql"),
		entc.FeatureNames("sql/globalid"),
	}

	if err := entc.Generate("./schema/models", &gen.Config{
		Target:  "./gen/go/ent",
		Package: "github.com/tuoitrevohoc/gofw-template/backend/gen/go/ent",
	}, opts...); err != nil {
		log.Fatal("running ent codegen:", err)
	}
}
