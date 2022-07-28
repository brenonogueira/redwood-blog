import type {
  QueryResolvers,
  MutationResolvers,
  CommentsResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const commentses: QueryResolvers['commentses'] = () => {
  return db.comments.findMany()
}

export const comments: QueryResolvers['comments'] = ({ id }) => {
  return db.comments.findUnique({
    where: { id },
  })
}

export const createComments: MutationResolvers['createComments'] = ({
  input,
}) => {
  return db.comments.create({
    data: input,
  })
}

export const updateComments: MutationResolvers['updateComments'] = ({
  id,
  input,
}) => {
  return db.comments.update({
    data: input,
    where: { id },
  })
}

export const deleteComments: MutationResolvers['deleteComments'] = ({ id }) => {
  return db.comments.delete({
    where: { id },
  })
}

export const Comments: CommentsResolvers = {
  post: (_obj, { root }) =>
    db.comments.findUnique({ where: { id: root.id } }).post(),
}
