import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BookForm from 'src/components/Book/BookForm'

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      id
    }
  }
`

export const QUERY = gql`
  query FindAuthors {
    authors {
      id
      name
      createdAt
    }
  }
`

const NewBook = () => {
  const a = useQuery(QUERY)
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book created')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    createBook({ variables: { input: castInput } })
  }

  useEffect(() => {
    console.log(a.data?.authors)
  }, [a])

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Book</h2>
      </header>
      <div className="rw-segment-main">
        <BookForm
          onSave={onSave}
          loading={loading}
          error={error}
          authors={a?.data?.authors}
        />
      </div>
    </div>
  )
}

export default NewBook
