import { useParams } from "react-router"
import { createPortal } from "react-dom"
import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { AnimatePresence } from "motion/react"
import { CREATE_STEP, GET_WORKFLOW } from "@/queries"
import { Modal } from "@/components/modal"
import { NotFound } from "@/components/not-found"
import { StageForm } from "@/components/stage-form"
import { PageHeader } from "@/components/page-header"
import { StagePanel } from "@/components/stage-panel"

export function WorkflowPage() {
	const params = useParams()
	const { loading, error, data } = useQuery(GET_WORKFLOW, {
		variables: { id: parseInt(params.id || "") }
	})

	const [createStep] = useMutation(CREATE_STEP, {
		refetchQueries: [GET_WORKFLOW]
	})

	const [stagePendingStep, setStagePendingStep] = useState<number | null>(null)

	if (loading) return "loading..."
	if (error) return JSON.stringify(error)

	if (!data?.workflowById) {
		return (
			<NotFound
				message={`We couldn't find a workflow with an id of ${params.id}`}
			/>
		)
	}

	const workflow = data.workflowById

	return (
		<div className="flex flex-col h-full">
			<PageHeader title={`Workflow: ${workflow.name}`} />
			<div className="grow bg-light dark:bg-dark dotted-bg p-4">
				{workflow.stages.length === 0 ? (
					<StageForm key={workflow.id} workflowId={workflow.id} />
				) : (
					<div className="grid grid-cols-5 gap-8 w-full">
						{workflow.stages.map((stage, index) => (
							<StagePanel
								key={`${stage.id}-${stage.name}`}
								stage={stage}
								workflowId={workflow.id}
								isLastStage={index === workflow.stages.length - 1}
								onClick={(stageId) => setStagePendingStep(stageId)}
							/>
						))}
					</div>
				)}
			</div>

			{createPortal(
				<AnimatePresence>
					{stagePendingStep ? (
						<Modal
							key="modal"
							prompt="Select an item for your workflow"
							onClose={() => setStagePendingStep(null)}
							onSubmit={(item) =>
								item &&
								createStep({
									variables: {
										payload: {
											name: item.name,
											description: item.description,
											stageId: stagePendingStep,
											categoryId: item.category
										}
									}
								})
							}
						/>
					) : null}
				</AnimatePresence>,
				document.body
			)}
		</div>
	)
}
