export const schema = gql`
  type Question {
    id: Int!
    query: String!
    book: Book!
    answers: Answer
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    questions: [Question]
  }

  input QuestionInput {
    query: String
    book: Int
    answers: Int
    updatedAt: DateTime
  }
`
