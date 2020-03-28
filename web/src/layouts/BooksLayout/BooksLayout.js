import { Link, routes } from '@redwoodjs/router'

import Navbar from 'src/components/UI/Navbar'

const BooksLayout = (props) => {
  return (
    <>
      <Navbar />
      <main className="uk-container">{props.children}</main>
    </>
  )
}

export default BooksLayout
