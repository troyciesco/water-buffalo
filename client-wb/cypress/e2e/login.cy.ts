/// <reference types="cypress" />

describe("template spec", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173/login")
	})
	it("shows validation if no email or password is provided", () => {
		cy.contains("button", "Login").click()
		cy.contains("An email is required.").should("exist")
		cy.contains("A password is required.").should("exist")
	})
	it("can go right to the dashboard for demo purposes", () => {
		cy.contains("Dashboard").click()
		cy.url().should("include", "/dashboard")
	})
})
