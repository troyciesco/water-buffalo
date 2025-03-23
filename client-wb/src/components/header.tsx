import { Link } from "react-router"
import { LogoBadge } from "./logo-badge"

export function Header() {
	return (
		<header className="md:p-4 dark:border-b-white flex justify-between items-center p-2 border-b">
			<Link to="/">
				<LogoBadge />
			</Link>
			<nav className="md:hidden">
				<ul className="flex gap-4 items-center text-sm">
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/workflows">Workflows</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
