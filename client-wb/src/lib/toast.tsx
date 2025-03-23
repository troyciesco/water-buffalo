// inspo: https://buildui.com/recipes/animated-toast#code
import * as RadixToast from "@radix-ui/react-toast"
import { AnimatePresence, motion } from "framer-motion"
import {
	ComponentRef,
	ReactNode,
	createContext,
	forwardRef,
	useContext,
	useState
} from "react"

type AlertType = "success" | "error" | "info"
const ToastContext = createContext<{
	showToast: ({ text, type }: { text: string; type: AlertType }) => void
}>({
	showToast: () => {
		throw new Error(
			"You can't call showToast() outside of a <ToastProvider> - add it to your tree."
		)
	}
})

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
	return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: ReactNode }) {
	const [messages, setMessages] = useState<
		{ id: string; text: string; type: AlertType }[]
	>([])

	function showToast({ text, type }: { text: string; type: AlertType }) {
		setMessages((toasts) => [
			...toasts,
			{
				id: window.crypto.randomUUID(),
				text,
				type
			}
		])
	}

	return (
		<RadixToast.Provider>
			<ToastContext.Provider value={{ showToast }}>
				{children}
			</ToastContext.Provider>

			<AnimatePresence mode="popLayout">
				{messages.map((toast) => (
					<Toast
						key={toast.id}
						text={toast.text}
						type={toast.type}
						onClose={() =>
							setMessages((toasts) => toasts.filter((t) => t.id !== toast.id))
						}
					/>
				))}
			</AnimatePresence>

			<RadixToast.Viewport className="max-sm:top-20 flex fixed top-4 left-1/2 flex-col-reverse gap-3 w-80 -translate-x-1/2" />
		</RadixToast.Provider>
	)
}

const Toast = forwardRef<
	ComponentRef<typeof RadixToast.Root>,
	{
		onClose: () => void
		text: string
		type: AlertType
	}
>(function Toast({ onClose, text, type }, forwardedRef) {
	const height = 52
	const margin = 16

	return (
		<RadixToast.Root
			ref={forwardedRef}
			asChild
			forceMount
			onOpenChange={onClose}
			duration={2500}>
			<motion.li
				layout
				initial={{ y: -(height + margin) }}
				animate={{ y: 0 }}
				exit={{
					opacity: 0,
					zIndex: -1,
					transition: {
						opacity: {
							duration: 0.2
						}
					}
				}}
				transition={{
					type: "spring",
					mass: 1,
					damping: 30,
					stiffness: 200
				}}
				className="md:w-96 mx-4 w-80"
				style={{ WebkitTapHighlightColor: "transparent" }}>
				<div className={`alert-${type} flex justify-between items-center p-0`}>
					<RadixToast.Description className="p-4 truncate">
						{text}
					</RadixToast.Description>
					<RadixToast.Close
						className={`border-${type}-dark hover:bg-${type}-200 text-${type}-dark p-4 border-l transition-all cursor-pointer`}>
						X
					</RadixToast.Close>
				</div>
			</motion.li>
		</RadixToast.Root>
	)
})
