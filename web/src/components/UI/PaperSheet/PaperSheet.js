const PaperSheet = (props) => {

  return (
    <div className="uk-flex uk-flex-center">
      <div className="paper">
        <article className="head">
          <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-small">
            <h2>Chismografo de Christofer</h2>
          </div>
        </article>
        <ol className="question-sheet">
          { Array(50).fill().map((_, i) => (
            <li key={i}>
              <p>Libre aqui...</p>
              <br />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )

}

export default PaperSheet
