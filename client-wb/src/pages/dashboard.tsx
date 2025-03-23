import { PageHeader } from "@/components/page-header"
import { Link } from "react-router"

export function DashboardPage() {
	return (
		<div>
			<PageHeader
				title="Welcome to Water Buffalo"
				description="The world's only workflow builder with a water buffalo mascot*"
				action={
					<p>
						* As far as we know{" "}
						<span className="bg-primary-base p-1 rounded-full">🐃</span>
					</p>
				}
			/>
			<p className="text-xl"></p>
			<div className="flex flex-col gap-8 p-4">
				<Link to="/workflows" className="text-3xl underline">
					view all workflows
				</Link>
				<Link to="/workflows/999999" className="text-3xl underline">
					view 404 page
				</Link>
			</div>
		</div>
	)
}
