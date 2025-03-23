import { Loader } from "@/components/loader"
import { PageHeader } from "@/components/page-header"
import { useCreateWorkflow } from "@/hooks/use-create-workflow"
import { GET_ALL_WORKFLOWS } from "@/queries"
import { useQuery } from "@apollo/client"
import { Link } from "react-router"

export function WorkflowsPage() {
	const { loading, data, error, refetch } = useQuery(GET_ALL_WORKFLOWS)
	const { createWorkflow } = useCreateWorkflow()

	const workflows = data?.allWorkflows || []
	return (
		<div className="flex flex-col h-full">
			<PageHeader
				title="All Workflows"
				action={
					<button onClick={() => createWorkflow()} className="btn-primary">
						Add new workflow +
					</button>
				}
			/>
			<div className="grow max-h-[calc(100vh-81px-81px-57px)] overflow-y-scroll p-4 h-full">
				{loading && <Loader />}
				{!loading && error && (
					<div className="text-balance flex flex-col p-2 my-2 max-w-sm text-sm text-red-800 bg-red-100 border border-red-800">
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
				{!loading && !error && (
					<ul className="md:grid-cols-6 grid grid-cols-2 gap-4">
						{workflows.length === 0 ? (
							<div>No workflows yet</div>
						) : (
							workflows.map((workflow) => (
								<li
									key={workflow.id}
									className="dark:bg-dark-muted hover:bg-primary-100 dark:hover:bg-primary-700 bg-white transition-all">
									<Link
										to={`/workflows/${workflow.id}`}
										className="block p-4 border">
										<article>
											<h2 className="text-lg font-medium">{workflow.name}</h2>
											<p>
												{workflow.stages.length} stage
												{workflow.stages.length === 1 ? "" : "s"}
											</p>
										</article>
									</Link>
								</li>
							))
						)}
					</ul>
				)}
			</div>
		</div>
	)
}
