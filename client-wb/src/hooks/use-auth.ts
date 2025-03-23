const demoUser = {
	email: "wilma.boston@example.com",
	password: "SecurePassword1!"
}

type LoginResponse = {
	success: boolean
	errors: { field: string; message: string }[]
}

export function useAuth() {
	const login = ({ email, password }: { email: string; password: string }) => {
		const result: LoginResponse = { success: true, errors: [] }

		if (!email) {
			result.success = false
			result.errors.push({ field: "email", message: "An email is required." })
		}

		if (!password) {
			result.success = false
			result.errors.push({
				field: "password",
				message: "A password is required."
			})
		}

		if (result.success === false) {
			return result
		}

		if (
			email.toLowerCase() !== demoUser.email ||
			password !== demoUser.password
		) {
			result.success = false
			result.errors.push({
				field: "general",
				message: "Email/password is incorrect."
			})
		}

		return result
	}

	return { login }
}
