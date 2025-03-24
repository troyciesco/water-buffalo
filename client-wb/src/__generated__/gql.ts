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
    "\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetAllWorkflowsDocument,
    "\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetWorkflowDocument,
    "\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t\ttags {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetAllCategoriesDocument,
    "\n\tquery GetAllTags {\n\t\tallTags {\n\t\t\tid\n\t\t\tprimary\n\t\t\taliases\n\t\t}\n\t}\n": typeof types.GetAllTagsDocument,
    "\n\tmutation CreateWorkflow($name: String!) {\n\t\tcreateWorkflow(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": typeof types.CreateWorkflowDocument,
    "\n\tmutation CreateStage($name: String!, $workflowId: Number!) {\n\t\tcreateStage(name: $name, workflowId: $workflowId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": typeof types.CreateStageDocument,
    "\n\tmutation CreateStep(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$stageId: Number!\n\t\t$categoryId: String!\n\t\t$icon: String\n\t) {\n\t\tcreateStep(\n\t\t\tname: $name\n\t\t\tdescription: $description\n\t\t\tstageId: $stageId\n\t\t\tcategoryId: $categoryId\n\t\t\ticon: $icon\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n": typeof types.CreateStepDocument,
};
const documents: Documents = {
    "\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.GetAllWorkflowsDocument,
    "\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetWorkflowDocument,
    "\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t\ttags {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetAllCategoriesDocument,
    "\n\tquery GetAllTags {\n\t\tallTags {\n\t\t\tid\n\t\t\tprimary\n\t\t\taliases\n\t\t}\n\t}\n": types.GetAllTagsDocument,
    "\n\tmutation CreateWorkflow($name: String!) {\n\t\tcreateWorkflow(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.CreateWorkflowDocument,
    "\n\tmutation CreateStage($name: String!, $workflowId: Number!) {\n\t\tcreateStage(name: $name, workflowId: $workflowId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n": types.CreateStageDocument,
    "\n\tmutation CreateStep(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$stageId: Number!\n\t\t$categoryId: String!\n\t\t$icon: String\n\t) {\n\t\tcreateStep(\n\t\t\tname: $name\n\t\t\tdescription: $description\n\t\t\tstageId: $stageId\n\t\t\tcategoryId: $categoryId\n\t\t\ticon: $icon\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n": types.CreateStepDocument,
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
export function gql(source: "\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllWorkflows {\n\t\tallWorkflows {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetWorkflow($id: Number!) {\n\t\tworkflowById(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tstages {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tsteps {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\torder\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t\ttags {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllCategories {\n\t\tallCategories {\n\t\t\tid\n\t\t\tname\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tcategory: categoryId\n\t\t\t\ttags {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetAllTags {\n\t\tallTags {\n\t\t\tid\n\t\t\tprimary\n\t\t\taliases\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetAllTags {\n\t\tallTags {\n\t\t\tid\n\t\t\tprimary\n\t\t\taliases\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateWorkflow($name: String!) {\n\t\tcreateWorkflow(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateWorkflow($name: String!) {\n\t\tcreateWorkflow(name: $name) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateStage($name: String!, $workflowId: Number!) {\n\t\tcreateStage(name: $name, workflowId: $workflowId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateStage($name: String!, $workflowId: Number!) {\n\t\tcreateStage(name: $name, workflowId: $workflowId) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation CreateStep(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$stageId: Number!\n\t\t$categoryId: String!\n\t\t$icon: String\n\t) {\n\t\tcreateStep(\n\t\t\tname: $name\n\t\t\tdescription: $description\n\t\t\tstageId: $stageId\n\t\t\tcategoryId: $categoryId\n\t\t\ticon: $icon\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateStep(\n\t\t$name: String!\n\t\t$description: String!\n\t\t$stageId: Number!\n\t\t$categoryId: String!\n\t\t$icon: String\n\t) {\n\t\tcreateStep(\n\t\t\tname: $name\n\t\t\tdescription: $description\n\t\t\tstageId: $stageId\n\t\t\tcategoryId: $categoryId\n\t\t\ticon: $icon\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\torder\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;