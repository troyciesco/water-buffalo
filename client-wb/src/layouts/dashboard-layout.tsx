import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Link, Outlet } from "react-router"

const workflows = [{ id: "123453" }, { id: "643432" }, { id: "632326" }]

export function DashboardLayout() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex grow">
				<aside className="border-r divide-y divide-gray-400">
					<div className="py-4 pl-4 pr-16">
						<Link to="/dashboard" className="font-bold hover:underline">
							Dashboard
						</Link>
					</div>
					<div className="py-4 pl-4 pr-16">
						<Link to="/workflows" className="font-bold hover:underline">
							Workflows
						</Link>
						<ul className="pl-4 space-y-2 mt-2">
							{workflows.map((workflow) => (
								<li key={workflow.id}>
									<Link
										to={`/workflows/${workflow.id}`}
										className="hover:underline">
										{workflow.id}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</aside>
				<main className="grow">
					<Outlet />
				</main>
			</div>
			<Footer />
		</div>
	)
}
