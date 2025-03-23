import { FormEvent, ReactNode } from "react"

type FormProps = {
	children: ReactNode
	buttonText: string
	isButtonDisabled: boolean
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
	errors: string[]
}

export function Form({
	children,
	buttonText,
	isButtonDisabled,
	onSubmit,
	errors
}: FormProps) {
	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-10">
			<div className="space-y-7">{children}</div>
			<div className="flex justify-between items-center">
				<div>
					{errors.length > 0 && (
						<div className="alert-error p-1 mt-0 w-40 text-xs border">
							{errors.join(" ")}
						</div>
					)}
				</div>
				<button className="btn-primary self-end" disabled={isButtonDisabled}>
					{buttonText}
				</button>
			</div>
		</form>
	)
}
