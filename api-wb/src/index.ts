import { app, ServiceError } from "@getcronit/pylon"
import { serve } from "@hono/node-server"
import { prisma } from "~/prisma/client"

export const graphql = {
	Query: {
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
			return await prisma.workflow.findMany({
				include: { stages: { include: { steps: true } } }
			})
		},
		workflowById: async (id: number) => {
			return await prisma.workflow.findUnique({
				where: { id },
				include: { stages: { include: { steps: true } } }
			})
		},
		allTags: async () => {
			return await prisma.tag.findMany()
		}
	},
	Mutation: {
		createWorkflow: async (name: string) => {
			return await prisma.workflow.create({ data: { name } })
		},
		createStage: async (name: string, workflowId: number) => {
			return await prisma.stage.create({
				data: { name, workflow: { connect: { id: workflowId } } }
			})
		},
		createStep: async (
			name: string,
			description: string,
			stageId: number,
			categoryId: string,
			icon?: string
		) => {
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
