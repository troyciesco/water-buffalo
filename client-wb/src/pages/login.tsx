import { Form } from "@/components/form"
import { Input } from "@/components/input"
import { LogoFull } from "@/components/logo-full"
import { useAuth } from "@/hooks/use-auth"
import { FormErrors } from "@/types"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router"

export function LoginPage() {
	const { login } = useAuth()
	const navigate = useNavigate()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const fields = ["email", "password", "general"]
	const [errors, setErrors] = useState<FormErrors<(typeof fields)[number]>>({})

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const email = formData.get("email")?.toString() || ""
		const password = formData.get("password")?.toString() || ""
		const result = login({ email, password })
		if (result.success) {
			navigate("/dashboard")
		} else {
			const newErrors: FormErrors<(typeof fields)[number]> = {}
			result.errors.forEach((error) => {
				if (newErrors[error.field]) {
					newErrors[error.field]?.push(error.message)
				} else {
					newErrors[error.field] = [error.message]
				}
			})
			setErrors(newErrors)
		}
	}

	return (
		<div className="dark:bg-dark bg-light flex flex-col justify-center items-center h-screen">
			<div className="mx-4">
				<LogoFull />
				<div className="p-8 border">
					<Form
						onSubmit={handleSubmit}
						buttonText="Login"
						// always active so validation will show
						isButtonDisabled={false}
						errors={errors.general || []}>
						<div>
							<h1 className="mb-4 text-xl font-bold">Login to Your Account</h1>
							<div className="space-y-7">
								<Input
									type="email"
									name="email"
									label="Email"
									placeholder="wilma.boston@example.com"
									errors={errors.email || []}
								/>
								<Input
									type="password"
									name="password"
									label="Password"
									placeholder="SecurePassword1!"
									errors={errors.password || []}
								/>
							</div>
						</div>
					</Form>
				</div>
				<div className="alert-info">
					<div className="mb-2">
						<div className="font-medium">To login to this demo:</div>
						<div>email: wilma.boston@example.com</div>
						<div>password: SecurePassword1!</div>
					</div>
					<div className="text-xs text-right">
						Or just go right to the{" "}
						<Link to="/dashboard" className="font-medium underline">
							Dashboard
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
