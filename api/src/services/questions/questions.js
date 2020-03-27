export const questions = () => {
  return db.question.findMany()
}
