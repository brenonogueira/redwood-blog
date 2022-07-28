export const schema = gql`
  type Role {
    id: Int!
    name: String!
    createdAt: DateTime!
    userId: Int!
    user: User!
  }

  type Query {
    roles: [Role!]! @requireAuth
    role(id: Int!): Role @requireAuth
  }

  input CreateRoleInput {
    name: String!
    userId: Int!
  }

  input UpdateRoleInput {
    name: String
    userId: Int
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role! @requireAuth
    updateRole(id: Int!, input: UpdateRoleInput!): Role! @requireAuth
    deleteRole(id: Int!): Role! @requireAuth
  }
`
