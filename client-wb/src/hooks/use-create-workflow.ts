import { useToast } from "@/lib/toast"
import { CREATE_WORKFLOW, GET_ALL_WORKFLOWS } from "@/queries"
import { useMutation } from "@apollo/client"
import { faker } from "@faker-js/faker"

export function useCreateWorkflow() {
	const { showToast } = useToast()

	const [createWorkflow] = useMutation(CREATE_WORKFLOW, {
		variables: { payload: { name: faker.science.chemicalElement().name } },
		refetchQueries: [GET_ALL_WORKFLOWS],
		onCompleted: (data) => {
			showToast({
				text: `Workflow created: ${data.createWorkflow.name}`,
				type: "success"
			})
		},
		onError: () => {
			showToast({
				text: `Failed to create workflow`,
				type: "error"
			})
		}
	})
	return { createWorkflow }
}
