import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import QuestionForm from 'src/components/QuestionForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateQuestionMutation($input: QuestionInput!) {
    createQuestion(input: $input) {
      id
    }
  }
`

const NewQuestion = () => {
  const [createQuestion, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.questions())
    },
  })

  const onSave = (input) => {
    createQuestion({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Question</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <QuestionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewQuestion
