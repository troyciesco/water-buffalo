import { AnimatePresence } from "motion/react"
import { motion } from "motion/react"
import { Popover } from "radix-ui"
import { StageForm } from "@/components/stage-form"
import { useParams } from "react-router"

export function AddStageBtn() {
	const params = useParams()

	return (
		<Popover.Root modal>
			<Popover.Trigger asChild>
				<button className="hover:opacity-100 dark:bg-slate-800 absolute -right-12 top-1/2 w-10 h-10 bg-white rounded-full border shadow opacity-80 transition-all -translate-y-1/2 cursor-pointer">
					+
				</button>
			</Popover.Trigger>
			<Popover.Portal>
				<AnimatePresence>
					<Popover.Content asChild sideOffset={4}>
						<motion.div
							key="add-new-stage-form"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="dark:bg-slate-800 p-4 bg-white border shadow-md">
							<div className="flex justify-end w-full">
								<Popover.Close>X</Popover.Close>
							</div>
							<StageForm
								title="Create the next stage"
								workflowId={parseInt(params.id as string)}
							/>
						</motion.div>
					</Popover.Content>
				</AnimatePresence>
			</Popover.Portal>
		</Popover.Root>
	)
}
