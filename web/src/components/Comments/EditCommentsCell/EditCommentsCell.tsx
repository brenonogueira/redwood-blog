import type { EditCommentsById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CommentsForm from 'src/components/Comments/CommentsForm'

export const QUERY = gql`
  query EditCommentsById($id: Int!) {
    comments: comments(id: $id) {
      id
      author
      comment
      postId
    }
  }
`
const UPDATE_COMMENTS_MUTATION = gql`
  mutation UpdateCommentsMutation($id: Int!, $input: UpdateCommentsInput!) {
    updateComments(id: $id, input: $input) {
      id
      author
      comment
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<EditCommentsById>) => {
  const [updateComments, { loading, error }] = useMutation(UPDATE_COMMENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Comments updated')
      navigate(routes.commentses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { postId: parseInt(input.postId), })
    updateComments({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Comments {comments.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CommentsForm comments={comments} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
