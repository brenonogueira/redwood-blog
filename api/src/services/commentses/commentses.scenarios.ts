import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentsCreateArgs>({
  comments: {
    one: {
      data: {
        author: 'String',
        comment: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
    two: {
      data: {
        author: 'String',
        comment: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
