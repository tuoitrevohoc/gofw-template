import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  GraphQLResponse,
  RequestParameters,
  Variables,
  Observable,
} from "relay-runtime";

import { createClient } from "graphql-sse";

const fetchQuery: FetchFunction = async (
  operation: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> => {
  const response = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
};

function subscribeQuery(
  operation: RequestParameters,
  variables: Variables
): Observable<GraphQLResponse> {
  return Observable.create((sink) => {
    const client = createClient({
      url: "/graphql",
    });

    return client.subscribe(
      {
        query: operation.text!,
        variables,
      },
      {
        next: (event: any) => {
          sink.next(event);
        },
        error: (error: any) => {
          console.error(error);
          sink.error(error);
        },
        complete: () => {
          sink.complete();
        },
      }
    );
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery, subscribeQuery),
  store: new Store(new RecordSource()),
});

export default environment;
