import { ReactNode } from "react"

type PageHeaderProps = {
	title: string
	description?: string
	action?: ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
	return (
		<div className="md:flex-row md:justify-between md:items-center flex flex-col p-4 border-b">
			<div>
				<h1 className="md:text-5xl text-balance text-3xl tracking-tighter">
					{title}
				</h1>
				{description && (
					<p className="md:text-xl text-balance mt-2">{description}</p>
				)}
			</div>
			{action && <div className="md:mt-0 mt-4">{action}</div>}
		</div>
	)
}
