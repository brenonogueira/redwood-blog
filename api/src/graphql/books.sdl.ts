export const schema = gql`
  type Book {
    id: Int!
    name: String!
    authorId: Int!
    author: Author!
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    name: String!
    authorId: Int!
  }

  input UpdateBookInput {
    name: String
    authorId: Int
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
