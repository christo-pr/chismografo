import { Link, routes } from '@redwoodjs/router'

// import Questions from 'src/components/Questions'

export const QUERY = gql`
  query POSTS {
    questions {
      id
      query
      book {
        id
      }
      answers {
        id
      }
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
      {'No questions yet. '}
      <Link
        to={routes.newQuestion()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ questions }) => {
  return null
}
