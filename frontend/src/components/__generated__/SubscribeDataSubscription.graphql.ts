/**
 * @generated SignedSource<<c3eb56f02eb1fa134c687cc1270033ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type SubscribeDataSubscription$variables = Record<PropertyKey, never>;
export type SubscribeDataSubscription$data = {
  readonly countUpdated: number;
};
export type SubscribeDataSubscription = {
  response: SubscribeDataSubscription$data;
  variables: SubscribeDataSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "countUpdated",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubscribeDataSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SubscribeDataSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "921080ac452d08112476ca65cdd386fc",
    "id": null,
    "metadata": {},
    "name": "SubscribeDataSubscription",
    "operationKind": "subscription",
    "text": "subscription SubscribeDataSubscription {\n  countUpdated\n}\n"
  }
};
})();

(node as any).hash = "160e56e293ebee3db97785d284b5291e";

export default node;
