export const schema = gql`
  type Book {
    id: Int!
    name: String!
    code: String!
    owner: User!
    questions: Question
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    books: [Book]
  }

  input BookInput {
    name: String
    code: String
    owner: Int
    questions: Int
    updatedAt: DateTime
  }
`
