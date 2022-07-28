import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CommentsForm from 'src/components/Comments/CommentsForm'

const CREATE_COMMENTS_MUTATION = gql`
  mutation CreateCommentsMutation($input: CreateCommentsInput!) {
    createComments(input: $input) {
      id
    }
  }
`

const NewComments = () => {
  const [createComments, { loading, error }] = useMutation(CREATE_COMMENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Comments created')
      navigate(routes.commentses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { postId: parseInt(input.postId), })
    createComments({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Comments</h2>
      </header>
      <div className="rw-segment-main">
        <CommentsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewComments
