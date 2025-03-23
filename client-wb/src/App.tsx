import { BrowserRouter, Route, Routes } from "react-router"
import { LoginPage } from "./pages/login"
import { DashboardPage } from "./pages/dashboard"
import { WorkflowsPage } from "./pages/workflows"
import { WorkflowPage } from "./pages/workflows/[id]"
import { DashboardLayout } from "./layouts/dashboard-layout"

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="workflows">
						<Route index element={<WorkflowsPage />} />
						<Route path=":id" element={<WorkflowPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
