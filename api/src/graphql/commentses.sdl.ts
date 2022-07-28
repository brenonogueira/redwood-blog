export const schema = gql`
  type Comments {
    id: Int!
    author: String!
    comment: String!
    postId: Int!
    post: Post!
  }

  type Query {
    commentses: [Comments!]! @requireAuth
    comments(id: Int!): Comments @requireAuth
  }

  input CreateCommentsInput {
    author: String!
    comment: String!
    postId: Int!
  }

  input UpdateCommentsInput {
    author: String
    comment: String
    postId: Int
  }

  type Mutation {
    createComments(input: CreateCommentsInput!): Comments! @requireAuth
    updateComments(id: Int!, input: UpdateCommentsInput!): Comments!
      @requireAuth
    deleteComments(id: Int!): Comments! @requireAuth
  }
`
