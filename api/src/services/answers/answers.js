export const answers = () => {
  return db.answer.findMany()
}
