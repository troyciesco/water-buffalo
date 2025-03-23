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
						<span className="p-1 bg-white rounded-full">🐃</span>
					</p>
				}
			/>
			<p className="text-xl"></p>
			<div className="flex flex-col">
				<Link to="/workflows">workflows</Link>
				<Link to="/workflows/234523">workflows 234523</Link>
			</div>
		</div>
	)
}
