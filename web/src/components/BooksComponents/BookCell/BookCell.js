import Book from 'src/components/BooksComponents/Book'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    book: book(id: $id) {
      id
      code
      owner
      questions {
        id
      }
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Book not found</div>

export const Success = ({ book }) => {
  return <Book book={book} />
}
