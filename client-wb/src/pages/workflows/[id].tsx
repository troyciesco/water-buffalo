import { useParams } from "react-router"
import { createPortal } from "react-dom"
import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { AnimatePresence, Reorder } from "motion/react"
import { CREATE_STEP, GET_WORKFLOW } from "@/queries"
import { Modal } from "@/components/modal"
import { NotFound } from "@/components/not-found"
import { StageForm } from "@/components/stage-form"
import { AddStageBtn } from "@/components/add-stage-btn"
import { PageHeader } from "@/components/page-header"

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
			{/* https://stackoverflow.com/questions/55364127/making-a-dotted-grid-with-css */}
			<div className="p-4 grow bg-white dark:bg-slate-900 [background-image:radial-gradient(#94a3b8_1px,transparent_0)] [background-size:30px_30px] [background-position:-8px_-8px]">
				{workflow.stages.length === 0 ? (
					<StageForm workflowId={parseInt(params.id as string)} />
				) : (
					<div className="grid grid-cols-5 gap-8 w-full">
						{workflow.stages.map((stage, index) => (
							<div
								key={`${stage.id}-${stage.name}`}
								className="dark:bg-gray-800 flex relative flex-col p-4 mb-4 bg-gray-100 border">
								<div className="mb-4 text-lg font-bold">
									Stage: {stage.name}
								</div>
								{stage.steps.length === 0 ? (
									<div>No items added yet</div>
								) : (
									<>
										<Reorder.Group
											axis="y"
											values={stage.steps}
											// onReorder={setItems}
											onReorder={() => {}}
											className="flex flex-col space-y-2">
											<AnimatePresence>
												{stage.steps.map((step) => (
													<Reorder.Item
														key={step.id}
														value={step}
														className="dark:bg-gray-700 cursor-grab p-2 bg-gray-50 border"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}>
														{step.name}
													</Reorder.Item>
												))}
											</AnimatePresence>
										</Reorder.Group>
										{index === workflow.stages.length - 1 && <AddStageBtn />}
									</>
								)}
								<button
									onClick={() => setStagePendingStep(stage.id)}
									className="btn-primary self-end mt-4">
									Add new item +
								</button>
							</div>
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
