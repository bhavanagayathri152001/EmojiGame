import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetEmojiGame} = props

  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const winOrLoseText = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  const playButton = () => {
    resetEmojiGame()
  }
  return (
    <div className="win-or-lose-card">
      <div className="results-container">
        <h1 className="win-or-lose-text">{winOrLoseText}</h1>
        <p className="best-score-text">{scoreText}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="play-button" onClick={playButton}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
