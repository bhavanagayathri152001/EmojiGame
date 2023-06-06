import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInprogress} = props

  return (
    <div className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-text">Emoji Game</h1>
      </div>
      {isGameInprogress && (
        <div className="score-container">
          <p className="score-text">Score: {score}</p>
          <p className="score-text">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
