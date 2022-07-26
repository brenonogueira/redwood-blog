import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { name: 'String', email: 'String' } },
    two: { data: { name: 'String', email: 'String' } },
  },
})

export type StandardScenario = typeof standard
