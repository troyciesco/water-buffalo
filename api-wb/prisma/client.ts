import { PrismaClient } from "@prisma/client"

function createPrisma() {
	return new PrismaClient().$extends({
		result: {
			tag: {
				aliases: {
					needs: { aliases: true },
					compute(tag) {
						return tag.aliases ? tag.aliases.split(",").filter(Boolean) : []
					}
				}
			}
		}
	})
}

// using return type like this fixes type safety with extensions
// see https://github.com/prisma/prisma/discussions/18014#discussioncomment-5074351
const globalForPrisma = global as unknown as {
	prisma: ReturnType<typeof createPrisma>
}

export const prisma = globalForPrisma.prisma || createPrisma()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
