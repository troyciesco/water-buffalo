import { motion } from "motion/react"

export function Overlay({ onClose }: { onClose: () => void }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { delay: 0.2 } }}
			className="bg-dark/70 absolute z-10 w-full h-full"
			onClick={onClose}></motion.div>
	)
}
