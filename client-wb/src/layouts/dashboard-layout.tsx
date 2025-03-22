import { Footer } from "@/components/footer"
import { LogoBadge } from "@/components/logo-badge"
import { Outlet } from "react-router"

export function DashboardLayout() {
	return (
		<div className="flex flex-col h-screen">
			<header className="p-4 border-b dark:border-b-white">
				<LogoBadge />
			</header>
			<div className="grid grid-cols-12 grow">
				<aside className="col-span-1 p-4 border-r">
					<ul>
						<li>alpha</li>
						<li>bravo</li>
						<li>charlie</li>
						<li>delta</li>
					</ul>
				</aside>
				<main className="col-span-11">
					<Outlet />
				</main>
			</div>
			<Footer />
		</div>
	)
}
