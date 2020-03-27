import { Link, routes } from '@redwoodjs/router'

import Books from 'src/components/BooksComponents/Books'

export const QUERY = gql`
  query ALL_BOOKS {
    books {
      id
      code
      owner
      createdAt
      updatedAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No books yet. '}
      <Link
        to={routes.newBook()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ books }) => {
  return <Books books={books} />
}

