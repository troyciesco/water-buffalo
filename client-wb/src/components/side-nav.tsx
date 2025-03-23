import { useToast } from "@/lib/toast"
import { CREATE_WORKFLOW, GET_ALL_WORKFLOWS } from "@/queries"
import { useMutation, useQuery } from "@apollo/client"
import { faker } from "@faker-js/faker"
import { Link } from "react-router"

export function SideNav() {
	const { loading, error, data, refetch } = useQuery(GET_ALL_WORKFLOWS)
	const { showToast } = useToast()
	const [createWorkflow] = useMutation(CREATE_WORKFLOW, {
		variables: { payload: { name: faker.science.chemicalElement().name } },
		refetchQueries: [GET_ALL_WORKFLOWS],
		onCompleted: (data) => {
			showToast(`Workflow created: ${data.createWorkflow.name}`)
		}
	})

	const workflows = data?.allWorkflows || []

	return (
		<aside className="w-72 border-r divide-y divide-gray-400">
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
