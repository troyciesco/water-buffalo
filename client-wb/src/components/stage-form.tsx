import { FormEvent, useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_STAGE, GET_WORKFLOW } from "@/queries"
import { Form } from "./form"
import { Input } from "./input"
import { FormErrors } from "@/types"

export function StageForm({
	title = "Create a Stage",
	workflowId
}: {
	title?: string
	workflowId: number
}) {
	const [errors, setErrors] = useState<FormErrors<(typeof fields)[number]>>({})
	const [createStage] = useMutation(CREATE_STAGE, {
		refetchQueries: [GET_WORKFLOW],
		onCompleted: () => setErrors({})
	})

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const fields = ["stageName"]

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const stageName = formData.get("stageName")?.toString() || ""
		createStage({
			variables: {
				payload: { name: stageName, workflowId }
			}
		})
	}

	return (
		<div className="dark:bg-slate-900 px-4 py-6 max-w-sm bg-white border">
			<Form
				onSubmit={handleSubmit}
				buttonText="Create Stage"
				isButtonDisabled={false}
				errors={errors.general || []}>
				<h2 className="mb-4 text-xl font-bold">{title}</h2>
				<Input
					type="text"
					name="stageName"
					label="Stage Name"
					placeholder="Alpha"
					required
					errors={errors.stageName || []}
				/>
			</Form>
		</div>
	)
}
