import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_COMMENTS_MUTATION = gql`
  mutation DeleteCommentsMutation($id: Int!) {
    deleteComments(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Comments = ({ comments }) => {
  const [deleteComments] = useMutation(DELETE_COMMENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Comments deleted')
      navigate(routes.commentses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete comments ' + id + '?')) {
      deleteComments({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Comments {comments.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{comments.id}</td>
            </tr><tr>
              <th>Author</th>
              <td>{comments.author}</td>
            </tr><tr>
              <th>Comment</th>
              <td>{comments.comment}</td>
            </tr><tr>
              <th>Post id</th>
              <td>{comments.postId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editComments({ id: comments.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(comments.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Comments
