import { Link } from "react-router"
import { LogoBadge } from "./logo-badge"

export function Header() {
	return (
		<header className="p-4 border-b dark:border-b-white flex">
			<Link to="/">
				<LogoBadge />
			</Link>
		</header>
	)
}
