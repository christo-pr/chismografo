import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import QuestionForm from 'src/components/QuestionForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    question: question(id: $id) {
      id
      query
      book
      answers
      createdAt
      updatedAt
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateQuestionMutation($id: Int!, $input: QuestionInput!) {
    updateQuestion(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ question }) => {
  const [updateQuestion, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.questions())
    },
  })

  const onSave = (input, id) => {
    updateQuestion({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Question {question.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <QuestionForm question={question} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
