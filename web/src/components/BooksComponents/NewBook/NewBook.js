import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BookForm from 'src/components/BooksComponents/BookForm'
import PaperSheet from 'src/components/UI/PaperSheet'

const CREATE_POST_MUTATION = gql`
  mutation CreateBookMutation($input: BookInput!) {
    createBook(input: $input) {
      id
    }
  }
`

const NewBook = () => {
  const [createBook, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.books())
    },
  })

  const onSave = (input) => {
    createBook({ variables: { input } })
  }

  return (
    <div className="uk-padding-large uk-flex uk-flex-column uk-flex-middle">
      <div className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-card-hover">
        <BookForm onSave={onSave} loading={loading} error={error} />
        <PaperSheet question=""/>
      </div>
    </div>
  )
}

export default NewBook
