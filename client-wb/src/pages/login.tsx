import { Link } from "react-router"

export function LoginPage() {
	return (
		<div className="dark:bg-slate-800 flex flex-col justify-center items-center h-screen bg-gray-300">
			<div>
				<div className="flex flex-col justify-center items-center p-4 mb-4 text-blue-700 bg-white border-8 border-double">
					<div className="leading-6">
						<div className="flex gap-3 items-center text-4xl font-bold tracking-tighter uppercase">
							<div className="hover:animate-spin">🐃</div>Water Buffalo
						</div>
						<span className="text-[31px] uppercase italic">
							Workflow Builder
						</span>
					</div>
				</div>
				<Link to="/dashboard" className="block px-4 py-2 border">
					Login
				</Link>
			</div>
		</div>
	)
}
