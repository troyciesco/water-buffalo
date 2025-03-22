import { app } from "@getcronit/pylon"
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
		}
		// allCategories: async () => {
		// 	return await Category.getAll()
		// },
		// categoryById: async (id: string) => {
		// 	return await Category.getById(id)
		// },
		// allItems: async () => {
		// 	return await CategoryItem.getAll()
		// }
	},
	Mutation: {}
}

serve(app, (info) => {
	console.log(`Server running at ${info.port}`)
})
