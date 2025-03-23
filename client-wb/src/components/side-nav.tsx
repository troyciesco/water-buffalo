import { useCreateWorkflow } from "@/hooks/use-create-workflow"
import { GET_ALL_WORKFLOWS } from "@/queries"
import { useQuery } from "@apollo/client"
import { Link } from "react-router"

export function SideNav() {
	const { createWorkflow } = useCreateWorkflow()
	const { loading, error, data, refetch } = useQuery(GET_ALL_WORKFLOWS)

	const workflows = data?.allWorkflows || []

	return (
		// @TODO: either scroll or dropdown for when there's dozens of workflows
		<aside className="hidden md:block w-60 h-[calc(100svh-81px-57px)] border-r divide-y divide-gray-400 overflow-y-hidden">
			<div className="py-4 pr-16 pl-4">
				<Link to="/dashboard" className="hover:underline font-bold">
					Dashboard
				</Link>
			</div>
			<div className="py-4 pr-12 pl-4">
				<Link to="/workflows" className="hover:underline block font-bold">
					Workflows
				</Link>
				{!loading && error && (
					<div className="text-balance flex flex-col p-2 my-2 text-sm text-red-800 bg-red-100 border border-red-800">
						<div className="mb-2">
							There was a problem trying to fetch existing workflows.
						</div>
						<button
							onClick={() => refetch()}
							className="self-end font-bold underline cursor-pointer">
							Try Again
						</button>
					</div>
				)}
				{!loading && !error && workflows.length !== 0 && (
					<ul className="pl-4 mt-2 mb-8 space-y-2">
						{workflows.map((workflow) => (
							<li key={workflow.id}>
								<Link
									to={`/workflows/${workflow.id}`}
									className="hover:underline">
									{workflow.name}
								</Link>
							</li>
						))}
					</ul>
				)}
				{!loading && !error && (
					<button
						onClick={() => createWorkflow()}
						className="hover:underline text-sm italic whitespace-nowrap cursor-pointer">
						Add new workflow +
					</button>
				)}
			</div>
		</aside>
	)
}
