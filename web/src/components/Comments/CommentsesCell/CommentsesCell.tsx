import type { FindCommentses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Commentses from 'src/components/Comments/Commentses'

export const QUERY = gql`
  query FindCommentses {
    commentses {
      id
      author
      comment
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No commentses yet. '}
      <Link
        to={routes.newComments()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ commentses }: CellSuccessProps<FindCommentses>) => {
  return <Commentses commentses={commentses} />
}
