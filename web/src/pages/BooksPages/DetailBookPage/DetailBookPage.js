import BooksLayout from 'src/layouts/BooksLayout'
import BookCell from 'src/components/BooksComponents/BookCell'

const DetailBookPage = ({ id }) => {
  return (
    <BooksLayout>
      <BookCell id={id} />
    </BooksLayout>
  )
}

export default DetailBookPage
