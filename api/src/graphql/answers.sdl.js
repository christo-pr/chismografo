export const schema = gql`
  type Answer {
    id: Int!
    order: Int!
    response: String!
    replier: String!
    gender: String!
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
    replier: String
    gender: String
    question: Int
    updatedAt: DateTime
  }
`
