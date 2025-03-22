import { Link } from "react-router"

export function LoginPage() {
	return (
		<div className="bg-gray-300 dark:bg-slate-800 h-screen flex flex-col items-center justify-center">
			<div>
				<div className="bg-white text-blue-700 mb-4 p-4 border-8 border-double flex flex-col items-center justify-center">
					<div className="leading-6">
						<div className="text-4xl font-bold tracking-tighter uppercase flex items-center gap-3">
							<div className="hover:animate-spin">☄️</div>Whirly Bolide
						</div>
						<span className="text-[31px] uppercase italic">
							Workflow Builder
						</span>
					</div>
				</div>
				<Link to="/dashboard" className="border py-2 px-4 block">
					Login
				</Link>
			</div>
		</div>
	)
}
