import { prisma } from "./client"
import { categories, items, tags } from "./seed-data"

async function seed() {
	await prisma.category.createMany({ data: categories })
	await prisma.tag.createMany({
		data: tags.map((tag) => ({ ...tag, aliases: tag.aliases.join(",") }))
	})
	for (const item of items) {
		await prisma.categoryItem.create({
			data: {
				...item,
				category: { connect: { id: item.category } },
				tags: {
					connect: item.tags.map((tag) => ({
						id: tag
					}))
				}
			}
		})
	}
}

seed()
	.then(async () => {
		console.log("Successfully seeded database!")
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
