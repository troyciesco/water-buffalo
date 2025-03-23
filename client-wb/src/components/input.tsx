import { cn } from "@/lib/utils"

type InputProps = {
	type: string
	name: string
	label: string
	errors: string[]
	required?: boolean
	placeholder?: string
}

export function Input({
	type,
	name,
	label,
	errors,
	required,
	placeholder
}: InputProps) {
	return (
		<div className="flex relative flex-col">
			<label htmlFor={name} className="text-sm mb-0.5">
				{label}
			</label>
			<div
				className={cn(
					errors.length > 0 &&
						"before:border-1 before:absolute before:inset-[1px] relative before:pointer-events-none before:border-red-600 focus-within:before:border-transparent"
				)}>
				<input
					id={name}
					type={type}
					name={name}
					placeholder={placeholder}
					required={required}
					className={cn(
						"w-full border p-1 bg-primary-50 dark:bg-dark-muted active:outline-primary-c-light focus:outline-primary-c-light",
						errors.length > 0 && "border-error-base dark:border-error-400"
					)}
				/>
			</div>
			{errors.length > 0 && (
				<span className="dark:text-error-400 text-error-base absolute -bottom-5 text-xs font-medium">
					{errors.join(" ")}
				</span>
			)}
		</div>
	)
}
