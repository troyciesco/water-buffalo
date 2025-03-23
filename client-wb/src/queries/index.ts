import { gql } from "@/__generated__"

export const GET_ALL_WORKFLOWS = gql(/* GraphQL */ `
	query GetAllWorkflows {
		allWorkflows {
			id
			name
			stages {
				id
			}
		}
	}
`)

export const GET_WORKFLOW = gql(/* GraphQL */ `
	query GetWorkflow($id: Number!) {
		workflowById(id: $id) {
			id
			name
			stages {
				id
				name
				steps {
					id
					name
					order
				}
			}
		}
	}
`)

export const GET_ALL_CATEGORIES = gql(/* GraphQL */ `
	query GetAllCategories {
		allCategories {
			id
			name
			items {
				id
				name
				description
				category: categoryId
			}
		}
	}
`)

export const CREATE_WORKFLOW = gql(/* GraphQL */ `
	mutation CreateWorkflow($name: String!) {
		createWorkflow(name: $name) {
			id
			name
		}
	}
`)

export const CREATE_STAGE = gql(/* GraphQL */ `
	mutation CreateStage($name: String!, $workflowId: Number!) {
		createStage(name: $name, workflowId: $workflowId) {
			id
			name
		}
	}
`)

export const CREATE_STEP = gql(/* GraphQL */ `
	mutation CreateStep(
		$name: String!
		$description: String!
		$stageId: Number!
		$categoryId: String!
		$icon: String
	) {
		createStep(
			name: $name
			description: $description
			stageId: $stageId
			categoryId: $categoryId
			icon: $icon
		) {
			id
			name
			order
		}
	}
`)
