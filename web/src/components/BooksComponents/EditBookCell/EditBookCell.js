import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BookForm from 'src/components/BooksComponents/BookForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    book: book(id: $id) {
      id
      owner
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateBookMutation($id: Int!, $input: BookInput!) {
    updateBook(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ book }) => {
  const [updateBook, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.books())
    },
  })

  const onSave = (input, id) => {
    updateBook({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Book {book.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <BookForm book={book} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
