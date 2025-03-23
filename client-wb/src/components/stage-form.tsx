import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_STAGE, GET_WORKFLOW } from "@/queries"

export function StageForm({
	title = "Create a stage",
	workflowId
}: {
	title?: string
	workflowId: number
}) {
	const [stageName, setStageName] = useState("")
	const [createStage] = useMutation(CREATE_STAGE, {
		variables: {
			payload: { name: stageName, workflowId }
		},
		refetchQueries: [GET_WORKFLOW]
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		createStage()
		setStageName("")
	}

	return (
		<div className="dark:bg-slate-900 p-4 max-w-sm bg-white border">
			<div className="mb-4">{title}</div>
			<form className="flex flex-col gap-4 items-start" onSubmit={handleSubmit}>
				<label>
					<div className="sr-only">name</div>
					<input
						type="text"
						name="name"
						value={stageName}
						className="p-2 border"
						placeholder="Stage Name"
						onChange={(e) => setStageName(e.target.value)}
					/>
				</label>
				<button
					onClick={handleSubmit}
					disabled={!stageName}
					className="btn-primary">
					Create Stage
				</button>
			</form>
		</div>
	)
}
