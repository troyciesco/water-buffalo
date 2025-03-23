import { AnimatePresence } from "motion/react"
import { motion } from "motion/react"
import { Popover } from "radix-ui"
import { StageForm } from "@/components/stage-form"

export function AddStageBtn({ workflowId }: { workflowId: number }) {
	return (
		<Popover.Root modal>
			<Popover.Trigger asChild>
				<button className="hover:opacity-100 dark:bg-slate-800 md:-right-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 absolute -bottom-12 right-1/2 w-10 h-10 bg-white rounded-full border shadow opacity-80 transition-all translate-x-1/2 cursor-pointer">
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
							className="relative shadow-md">
							<Popover.Close className="absolute top-2 right-4 cursor-pointer">
								X
							</Popover.Close>
							<StageForm
								title="Create stage"
								key={workflowId}
								workflowId={workflowId}
							/>
						</motion.div>
					</Popover.Content>
				</AnimatePresence>
			</Popover.Portal>
		</Popover.Root>
	)
}
