import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: { data: { name: 'String', author: { create: { name: 'String' } } } },
    two: { data: { name: 'String', author: { create: { name: 'String' } } } },
  },
})

export type StandardScenario = typeof standard
