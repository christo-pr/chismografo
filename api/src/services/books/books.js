export const books = () => {
  return db.book.findMany()
}
