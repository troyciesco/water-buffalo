import { PageHeader } from "@/components/page-header"
import { GET_ALL_WORKFLOWS } from "@/queries"
import { useQuery } from "@apollo/client"
import { Link } from "react-router"

export function WorkflowsPage() {
	const { data } = useQuery(GET_ALL_WORKFLOWS)

	const workflows = data?.allWorkflows || []
	return (
		<div className="flex flex-col h-full">
			<PageHeader
				title="All Workflows"
				action={<button className="btn-primary">Add new workflow +</button>}
			/>
			<div className="grow p-4">
				<ul className="grid grid-cols-6 gap-4">
					{workflows.map((workflow) => (
						<li key={workflow.id}>
							<Link
								to={`/workflows/${workflow.id}`}
								className="block p-4 border">
								{workflow.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
