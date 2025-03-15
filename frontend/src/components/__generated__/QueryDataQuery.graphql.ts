/**
 * @generated SignedSource<<851367fa7028c6d4f560d081269beba9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type QueryDataQuery$variables = Record<PropertyKey, never>;
export type QueryDataQuery$data = {
  readonly count: number;
};
export type QueryDataQuery = {
  response: QueryDataQuery$data;
  variables: QueryDataQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "count",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryDataQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QueryDataQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3f7f4c241fec86cacbfa162ddd28560a",
    "id": null,
    "metadata": {},
    "name": "QueryDataQuery",
    "operationKind": "query",
    "text": "query QueryDataQuery {\n  count\n}\n"
  }
};
})();

(node as any).hash = "451310f7d464ac4eb029ca269c00ee19";

export default node;
