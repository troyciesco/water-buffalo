import { AnimatePresence, motion } from "motion/react"
import { Children, Fragment, isValidElement, ReactNode } from "react"

type BoxProps = {
	loading: boolean
	error: any
	children: ReactNode
	animate?: boolean
}

export const Box = ({ loading, error, children, animate = true }: BoxProps) => {
	let activeChild: ReactNode = null
	let modeKey: string = "content"

	Children.forEach(children, (child) => {
		if (!isValidElement(child)) return

		if (loading && child.type === Box.Loading) {
			activeChild = child
			modeKey = "loading"
		} else if (error && child.type === Box.Error) {
			activeChild = child
			modeKey = "error"
		} else if (!loading && !error && child.type === Box.Content) {
			activeChild = child
			modeKey = "content"
		}
	})

	const Wrapper = animate ? AnimatePresence : Fragment
	const Inner = animate ? motion.div : Fragment

	return (
		<Wrapper mode="wait">
			<Inner
				key={modeKey}
				{...(animate
					? {
							initial: { opacity: 0, y: 4 },
							animate: { opacity: 1, y: 0 },
							exit: { opacity: 0, y: -4 }
					  }
					: {})}>
				{activeChild}
			</Inner>
		</Wrapper>
	)
}

Box.Loading = ({ children }: { children: ReactNode }) => <>{children}</>
Box.Error = ({ children }: { children: ReactNode }) => <>{children}</>
Box.Content = ({ children }: { children: ReactNode }) => <>{children}</>

// <Box loading={loading} error={error} animate={true}>
// <Box.Loading>
//   <div className="text-gray-400">Loading workflows...</div>
// </Box.Loading>

// <Box.Error>
//   <div className="text-red-500">Error: {error?.message}</div>
// </Box.Error>

// <Box.Content>
//   <ul className="pl-4 mt-2 mb-8 space-y-2">
//     {workflows.map((workflow) => (
//       <li key={workflow.id}>
//         <Link
//           to={`/workflows/${workflow.id}`}
//           className="hover:underline">
//           {workflow.name}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </Box.Content>
// </Box>
