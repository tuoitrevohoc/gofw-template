package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.66

import (
	"context"

	"github.com/tuoitrevohoc/gofw-template/backend/gen/go/ent"
	"github.com/tuoitrevohoc/gofw-template/backend/gen/go/ent/todo"
	graphql1 "github.com/tuoitrevohoc/gofw-template/backend/gen/go/graphql"
	"github.com/tuoitrevohoc/gofw/packages/scalars"
)

// Node is the resolver for the node field.
func (r *queryResolver) Node(ctx context.Context, id scalars.GUID) (ent.Noder, error) {
	return r.entClient.Noder(ctx, id.Id(), ent.WithFixedNodeType(id.NodeType()))
}

// Nodes is the resolver for the nodes field.
func (r *queryResolver) Nodes(ctx context.Context, ids []*scalars.GUID) ([]ent.Noder, error) {
	if len(ids) == 0 {
		return make([]ent.Noder, 0), nil
	}

	idsInt := make([]int, len(ids))
	for i, id := range ids {
		idsInt[i] = id.Id()
	}

	return r.entClient.Noders(ctx, idsInt, ent.WithFixedNodeType(ids[0].NodeType()))
}

// ID is the resolver for the id field.
func (r *todoResolver) ID(ctx context.Context, obj *ent.Todo) (*scalars.GUID, error) {
	return scalars.NewGUID(string(todo.Table), obj.ID), nil
}

// Query returns graphql1.QueryResolver implementation.
func (r *Resolver) Query() graphql1.QueryResolver { return &queryResolver{r} }

// Todo returns graphql1.TodoResolver implementation.
func (r *Resolver) Todo() graphql1.TodoResolver { return &todoResolver{r} }

type queryResolver struct{ *Resolver }
type todoResolver struct{ *Resolver }
