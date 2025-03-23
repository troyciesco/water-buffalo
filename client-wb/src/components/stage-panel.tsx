import { AnimatePresence, Reorder } from "motion/react"
import { AddStageBtn } from "@/components/add-stage-btn"
import { GetWorkflowQuery } from "@/__generated__/graphql"

type Stage = NonNullable<
	NonNullable<GetWorkflowQuery["workflowById"]>["stages"][number]
>

type StagePanelProps = {
	stage: Stage
	workflowId: number
	isLastStage: boolean
	onClick: (stageId: number) => void
}
export function StagePanel({
	stage,
	workflowId,
	isLastStage,
	onClick
}: StagePanelProps) {
	return (
		<div
			key={`${stage.id}-${stage.name}`}
			className="dark:bg-dark-muted flex relative flex-col p-4 mb-4 bg-white border">
			<div className="mb-4 text-lg font-bold">Stage: {stage.name}</div>
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
									className="dark:bg-dark cursor-grab bg-light p-2 border"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}>
									{step.name}
								</Reorder.Item>
							))}
						</AnimatePresence>
					</Reorder.Group>
					{isLastStage && <AddStageBtn workflowId={workflowId} />}
				</>
			)}
			<button
				onClick={() => onClick(stage.id)}
				className="btn-primary self-end mt-4">
				Add new item +
			</button>
		</div>
	)
}
