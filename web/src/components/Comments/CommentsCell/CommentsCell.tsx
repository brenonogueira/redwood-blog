import type { FindCommentsById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comments from 'src/components/Comments/Comments'

export const QUERY = gql`
  query FindCommentsById($id: Int!) {
    comments: comments(id: $id) {
      id
      author
      comment
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Comments not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<FindCommentsById>) => {
  return <Comments comments={comments} />
}
