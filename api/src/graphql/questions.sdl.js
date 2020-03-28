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
    question(id: Int!): Question
  }

  input QuestionInput {
    query: String
    book: Int
    answers: Int
    updatedAt: DateTime
  }

  type Mutation {
    createQuestion(input: QuestionInput!): Question
    updateQuestion(id: Int!, input: QuestionInput!): Question
    deleteQuestion(id: Int!): Question
  }
`
