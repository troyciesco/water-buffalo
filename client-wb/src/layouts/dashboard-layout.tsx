import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SideNav } from "@/components/side-nav"
import { Outlet } from "react-router"

export function DashboardLayout() {
	return (
		<div className="bg-light dark:bg-dark flex overflow-hidden flex-col h-screen">
			<Header />
			<div className="grow flex">
				<SideNav />
				<main className="grow">
					<Outlet />
				</main>
			</div>
			<Footer />
		</div>
	)
}
