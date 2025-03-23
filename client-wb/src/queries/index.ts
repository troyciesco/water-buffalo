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

export const CREATE_WORKFLOW = gql(/* GraphQL */ `
	mutation CreateWorkflow($payload: PayloadInput!) {
		createWorkflow(payload: $payload) {
			id
			name
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

export const CREATE_STAGE = gql(/* GraphQL */ `
	mutation CreateStage($payload: PayloadInput_1!) {
		createStage(payload: $payload) {
			id
			name
		}
	}
`)

export const CREATE_STEP = gql(/* GraphQL */ `
	mutation CreateStep($payload: PayloadInput_2!) {
		createStep(payload: $payload) {
			id
			name
			order
		}
	}
`)
