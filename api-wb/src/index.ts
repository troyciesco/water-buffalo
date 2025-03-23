import { app, ServiceError } from "@getcronit/pylon"
import { serve } from "@hono/node-server"
import { prisma } from "~/prisma/client"

export const graphql = {
	Query: {
		hello: () => {
			return "Hello, world!"
		},
		allCategories: async () => {
			return await prisma.category.findMany({
				include: { items: { include: { tags: true } } }
			})
		},
		categoryById: async (id: string) => {
			return await prisma.category.findUnique({ where: { id } })
		},
		allItems: async () => {
			return await prisma.categoryItem.findMany({
				include: { category: true, tags: true }
			})
		},
		allWorkflows: async () => {
			// await new Promise((resolve) => setTimeout(resolve, 5000)) // Add 5s delay
			// const error = Boolean(Math.round(Math.random()))
			// if (error) {
			// 	throw new ServiceError("hi", { code: "MEGA_ERROR", statusCode: 400 })
			// }
			return await prisma.workflow.findMany({
				include: { stages: { include: { steps: true } } }
			})
		},
		workflowById: async (id: number) => {
			return await prisma.workflow.findUnique({
				where: { id },
				include: { stages: { include: { steps: true } } }
			})
		}
	},
	Mutation: {
		createWorkflow: async (payload: { name: string }) => {
			// note: apparently you can't destructure in a gql mutation arg so we do it here
			const { name } = payload
			return await prisma.workflow.create({ data: { name } })
		},
		createStage: async (payload: { name: string; workflowId: number }) => {
			const { name, workflowId } = payload
			return await prisma.stage.create({
				data: { name, workflow: { connect: { id: workflowId } } }
			})
		},
		createStep: async (payload: {
			name: string
			description: string
			icon?: string
			stageId: number
			categoryId: string
		}) => {
			const { name, description, icon, stageId, categoryId } = payload
			const currentLastStep = await prisma.step.findFirst({
				where: { stageId },
				orderBy: { order: "desc" }
			})

			const nextOrder = (currentLastStep?.order ?? 0) + 1

			return await prisma.step.create({
				data: {
					name,
					description,
					icon,
					order: nextOrder,
					stage: { connect: { id: stageId } },
					category: { connect: { id: categoryId } }
				}
			})
		}
	}
}

serve(app, (info) => {
	console.log(`Server running at ${info.port}`)
})
