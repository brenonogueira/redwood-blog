import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AuthorCreateArgs>({
  author: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = typeof standard
