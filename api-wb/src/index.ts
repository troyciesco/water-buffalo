import { app } from "@getcronit/pylon"
import { serve } from "@hono/node-server"
import { catalogPayload } from "./catalog-payload"

export const graphql = {
	Query: {
		hello: () => {
			return "Hello, world!"
		},
		allCategories: () => {
			return catalogPayload.categories.map((category) => ({
				...category,
				items: catalogPayload.items.filter(
					(item) => item.category === category.id
				)
			}))
		},
		categoryById: (id: string) => {
			return catalogPayload.categories.find((category) => id === category.id)
		},
		allItems: () => {
			return catalogPayload.items.map((item) => ({
				...item,
				category: catalogPayload.categories.find((c) => c.id === item.category)
			}))
		}
	},
	Mutation: {}
}

serve(app, (info) => {
	console.log(`Server running at ${info.port}`)
})
