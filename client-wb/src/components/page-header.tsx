import { ReactNode } from "react"

type PageHeaderProps = {
	title: string
	description?: string
	action?: ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
	return (
		<div className="flex justify-between items-center p-4 border-b">
			<div>
				<h1 className="text-5xl tracking-tighter">{title}</h1>
				{description && <p className="mt-2 text-xl">{description}</p>}
			</div>
			{action && action}
		</div>
	)
}
