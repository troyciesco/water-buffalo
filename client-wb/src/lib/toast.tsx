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

const ToastContext = createContext<{
	showToast: (text: string) => void
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
	const [messages, setMessages] = useState<{ id: string; text: string }[]>([])

	function showToast(text: string) {
		setMessages((toasts) => [
			...toasts,
			{
				id: window.crypto.randomUUID(),
				text
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
						onClose={() =>
							setMessages((toasts) => toasts.filter((t) => t.id !== toast.id))
						}
					/>
				))}
			</AnimatePresence>

			<RadixToast.Viewport className="max-sm:top-20 flex fixed top-4 right-4 flex-col-reverse gap-3 w-80" />
		</RadixToast.Provider>
	)
}

const Toast = forwardRef<
	ComponentRef<typeof RadixToast.Root>,
	{
		onClose: () => void
		text: string
	}
>(function Toast({ onClose, text }, forwardedRef) {
	const width = 320
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
				initial={{ x: width + margin }}
				animate={{ x: 0 }}
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
				style={{ width, WebkitTapHighlightColor: "transparent" }}>
				<div className="flex overflow-hidden justify-between items-center text-sm text-emerald-700 whitespace-nowrap bg-emerald-100 border border-emerald-600 shadow-md backdrop-blur">
					<RadixToast.Description className="p-4 truncate">
						{text}
					</RadixToast.Description>
					<RadixToast.Close className="border-emerald-600/50 hover:bg-emerald-200 hover:text-emerald-800 active:text-white p-4 text-emerald-700 border-l transition cursor-pointer">
						X
					</RadixToast.Close>
				</div>
			</motion.li>
		</RadixToast.Root>
	)
})
