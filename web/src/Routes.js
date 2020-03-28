// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/questions/{id:Int}/edit" page={EditQuestionPage} name="editQuestion" />
      <Route path="/questions/new" page={NewQuestionPage} name="newQuestion" />
      {/* Books routes */}
      <Route path="/books" page={BooksPagesIndexBooksPage} name="books" />
      <Route path="/books/{id:Int}" page={BooksPagesDetailBookPage} name="book" />
      <Route path="/books/{id:Int}/edit" page={BooksPagesEditBookPage} name="editBook" />
      <Route path="/chismografo" page={BooksPagesNewBookPage} name="newBook" />
      {/* Not found route */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
