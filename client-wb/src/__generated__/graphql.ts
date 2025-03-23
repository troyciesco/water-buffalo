/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  File: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** Custom scalar that handles both integers and floats */
  Number: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export type AllCategoriesAndAllCategories_1 = {
  __typename?: 'AllCategoriesAndAllCategories_1';
  id: Scalars['String']['output'];
  items: Array<ItemsAndAllItems_1>;
  name: Scalars['String']['output'];
};

export type AllItemsAndAllItems_1 = {
  __typename?: 'AllItemsAndAllItems_1';
  category: CategoryById;
  categoryId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags: Array<Tags>;
};

export type AllWorkflowsAndAllWorkflows_1 = {
  __typename?: 'AllWorkflowsAndAllWorkflows_1';
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
  stages: Array<StagesAndStages_1>;
};

export type CategoryById = {
  __typename?: 'CategoryById';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CreateStage = {
  __typename?: 'CreateStage';
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
  workflowId: Scalars['Number']['output'];
};

export type CreateWorkflow = {
  __typename?: 'CreateWorkflow';
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
};

export type ItemsAndAllItems_1 = {
  __typename?: 'ItemsAndAllItems_1';
  categoryId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags: Array<Tags>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStage: CreateStage;
  createStep: Steps;
  createWorkflow: CreateWorkflow;
};


export type MutationCreateStageArgs = {
  payload: PayloadInput_1;
};


export type MutationCreateStepArgs = {
  payload: PayloadInput_2;
};


export type MutationCreateWorkflowArgs = {
  payload: PayloadInput;
};

export type PayloadInput = {
  name: Scalars['String']['input'];
};

export type PayloadInput_1 = {
  name: Scalars['String']['input'];
  workflowId: Scalars['Number']['input'];
};

export type PayloadInput_2 = {
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  stageId: Scalars['Number']['input'];
};

export type Query = {
  __typename?: 'Query';
  allCategories: Array<AllCategoriesAndAllCategories_1>;
  allItems: Array<AllItemsAndAllItems_1>;
  allWorkflows: Array<AllWorkflowsAndAllWorkflows_1>;
  categoryById?: Maybe<CategoryById>;
  hello: Scalars['String']['output'];
  workflowById?: Maybe<WorkflowByIdAndAllWorkflows_1>;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryWorkflowByIdArgs = {
  id: Scalars['Number']['input'];
};

export type StagesAndStages_1 = {
  __typename?: 'StagesAndStages_1';
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
  steps: Array<Steps>;
  workflowId: Scalars['Number']['output'];
};

export type Stages_2AndStages_1 = {
  __typename?: 'Stages_2AndStages_1';
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
  steps: Array<Steps>;
  workflowId: Scalars['Number']['output'];
};

export type Steps = {
  __typename?: 'Steps';
  categoryId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Number']['output'];
  stageId: Scalars['Number']['output'];
};

export type Tags = {
  __typename?: 'Tags';
  aliases: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  primary: Scalars['String']['output'];
};

export type WorkflowByIdAndAllWorkflows_1 = {
  __typename?: 'WorkflowByIdAndAllWorkflows_1';
  id: Scalars['Number']['output'];
  name: Scalars['String']['output'];
  stages: Array<Stages_2AndStages_1>;
};

export type GetWorkflowQueryVariables = Exact<{
  id: Scalars['Number']['input'];
}>;


export type GetWorkflowQuery = { __typename?: 'Query', workflowById?: { __typename?: 'WorkflowByIdAndAllWorkflows_1', id: any, name: string, stages: Array<{ __typename?: 'Stages_2AndStages_1', id: any, name: string, steps: Array<{ __typename?: 'Steps', id: any, name: string, order: any }> }> } | null };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', allCategories: Array<{ __typename?: 'AllCategoriesAndAllCategories_1', id: string, name: string, items: Array<{ __typename?: 'ItemsAndAllItems_1', id: string, name: string, description: string, category: string }> }> };

export type CreateStageMutationVariables = Exact<{
  payload: PayloadInput_1;
}>;


export type CreateStageMutation = { __typename?: 'Mutation', createStage: { __typename?: 'CreateStage', id: any, name: string } };

export type CreateStepMutationVariables = Exact<{
  payload: PayloadInput_2;
}>;


export type CreateStepMutation = { __typename?: 'Mutation', createStep: { __typename?: 'Steps', id: any, name: string, order: any } };

export type GetAllWorkflowsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWorkflowsQuery = { __typename?: 'Query', allWorkflows: Array<{ __typename?: 'AllWorkflowsAndAllWorkflows_1', id: any, name: string }> };

export type CreateWorkflowMutationVariables = Exact<{
  payload: PayloadInput;
}>;


export type CreateWorkflowMutation = { __typename?: 'Mutation', createWorkflow: { __typename?: 'CreateWorkflow', id: any, name: string } };


export const GetWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Number"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workflowById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkflowQuery, GetWorkflowQueryVariables>;
export const GetAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","alias":{"kind":"Name","value":"category"},"name":{"kind":"Name","value":"categoryId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const CreateStageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PayloadInput_1"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateStageMutation, CreateStageMutationVariables>;
export const CreateStepDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStep"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PayloadInput_2"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStep"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<CreateStepMutation, CreateStepMutationVariables>;
export const GetAllWorkflowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllWorkflows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allWorkflows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllWorkflowsQuery, GetAllWorkflowsQueryVariables>;
export const CreateWorkflowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkflow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PayloadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWorkflow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateWorkflowMutation, CreateWorkflowMutationVariables>;