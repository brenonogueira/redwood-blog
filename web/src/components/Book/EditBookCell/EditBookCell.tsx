import { useEffect } from 'react'

import type { EditBookById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useQuery } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BookForm from 'src/components/Book/BookForm'

export const QUERY = gql`
  query EditBookById($id: Int!) {
    book: book(id: $id) {
      id
      name
      author {
        name
      }
      authorId
    }
  }
`
const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBookMutation($id: Int!, $input: UpdateBookInput!) {
    updateBook(id: $id, input: $input) {
      id
      name
      authorId
    }
  }
`

export const QUERY_FIND_AUTHORS = gql`
  query FindAuthors {
    authors {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ book }: CellSuccessProps<EditBookById>) => {
  const a = useQuery(QUERY_FIND_AUTHORS)
  const [updateBook, { loading, error }] = useMutation(UPDATE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book updated')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    updateBook({ variables: { id, input: castInput } })
  }

  useEffect(() => {
    console.log(a.data?.authors)
  }, [a])

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Book {book.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BookForm
          book={book}
          onSave={onSave}
          error={error}
          loading={loading}
          authors={a?.data?.authors}
        />
      </div>
    </div>
  )
}
