import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        name: 'String',
        user: { create: { name: 'String', email: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        user: { create: { name: 'String', email: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
