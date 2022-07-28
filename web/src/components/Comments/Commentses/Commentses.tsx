import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Comments/CommentsesCell'

const DELETE_COMMENTS_MUTATION = gql`
  mutation DeleteCommentsMutation($id: Int!) {
    deleteComments(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const CommentsesList = ({ commentses }) => {
  const [deleteComments] = useMutation(DELETE_COMMENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Comments deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete comments ' + id + '?')) {
      deleteComments({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Comment</th>
            <th>Post id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {commentses.map((comments) => (
            <tr key={comments.id}>
              <td>{truncate(comments.id)}</td>
              <td>{truncate(comments.author)}</td>
              <td>{truncate(comments.comment)}</td>
              <td>{truncate(comments.postId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.comments({ id: comments.id })}
                    title={'Show comments ' + comments.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editComments({ id: comments.id })}
                    title={'Edit comments ' + comments.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete comments ' + comments.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(comments.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CommentsesList
