export const schema = gql`
  type Answer {
    id: Int!
    order: Int!
    response: String!
    replier: User!
    question: Question!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    answers: [Answer]
  }

  input AnswerInput {
    order: Int
    response: String
    replier: Int
    question: Int
    updatedAt: DateTime
  }
`
