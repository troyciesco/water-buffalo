import { Link } from "react-router"

export function DashboardPage() {
	return (
		<div>
			<div>dashboard</div>
			<div className="flex flex-col">
				<Link to="/workflows">workflows</Link>
				<Link to="/workflows/234523">workflows 234523</Link>
			</div>
		</div>
	)
}
