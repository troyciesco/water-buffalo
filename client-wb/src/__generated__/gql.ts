/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetWorkflowDocument,
    "\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetAllCategoriesDocument,
    "\n\tmutation CreateStage($payload: PayloadInput_1!) {\n\t\tcreateStage(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": typeof types.CreateStageDocument,
    "\n\tmutation CreateStep($payload: PayloadInput_2!) {\n\t\tcreateStep(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n": typeof types.CreateStepDocument,
    "\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": typeof types.GetAllWorkflowsDocument,
    "\n\tmutation CreateWorkflow($payload: PayloadInput!) {\n\t\tcreateWorkflow(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": typeof types.CreateWorkflowDocument,
};
const documents: Documents = {
    "\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetWorkflowDocument,
    "\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t}\n\t\t}\n\t}\n": types.GetAllCategoriesDocument,
    "\n\tmutation CreateStage($payload: PayloadInput_1!) {\n\t\tcreateStage(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.CreateStageDocument,
    "\n\tmutation CreateStep($payload: PayloadInput_2!) {\n\t\tcreateStep(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n": types.CreateStepDocument,
    "\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.GetAllWorkflowsDocument,
    "\n\tmutation CreateWorkflow($payload: PayloadInput!) {\n\t\tcreateWorkflow(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.CreateWorkflowDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateStage($payload: PayloadInput_1!) {\n\t\tcreateStage(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateStage($payload: PayloadInput_1!) {\n\t\tcreateStage(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateStep($payload: PayloadInput_2!) {\n\t\tcreateStep(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateStep($payload: PayloadInput_2!) {\n\t\tcreateStep(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateWorkflow($payload: PayloadInput!) {\n\t\tcreateWorkflow(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateWorkflow($payload: PayloadInput!) {\n\t\tcreateWorkflow(payload: $payload) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;