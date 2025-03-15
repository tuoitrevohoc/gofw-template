/**
 * @generated SignedSource<<07e852280162de51b67a81887cd406dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MutateDataMutation$variables = Record<PropertyKey, never>;
export type MutateDataMutation$data = {
  readonly increaseCount: number;
};
export type MutateDataMutation = {
  response: MutateDataMutation$data;
  variables: MutateDataMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "increase",
        "value": 1
      }
    ],
    "kind": "ScalarField",
    "name": "increaseCount",
    "storageKey": "increaseCount(increase:1)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MutateDataMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MutateDataMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b0cb3ed65f1bdf2e630a40cfe7b2c113",
    "id": null,
    "metadata": {},
    "name": "MutateDataMutation",
    "operationKind": "mutation",
    "text": "mutation MutateDataMutation {\n  increaseCount(increase: 1)\n}\n"
  }
};
})();

(node as any).hash = "082a7e3a8c2e8fb2f4b558aea064e504";

export default node;
