import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedEmojis: [],
    isGameInprogress: true,
  }

  resetEmojiGame = () => {
    this.setState({clickedEmojis: [], isGameInprogress: true})
  }

  updateTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInprogress: false})
  }

  onClickEmojiImage = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const clickedEmojisLength = clickedEmojis.length

    const isEmojiPresent = clickedEmojis.includes(id)

    if (isEmojiPresent) {
      this.updateTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.updateTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getInprogressGameEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-game-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiCardDetails={eachEmoji}
            onClickEmojiImage={this.onClickEmojiImage}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  getWinOrLossCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        resetEmojiGame={this.resetEmojiGame}
      />
    )
  }

  render() {
    const {topScore, clickedEmojis, isGameInprogress} = this.state
    const score = clickedEmojis.length

    const isGameInprogressOrComplete = isGameInprogress
      ? this.getInprogressGameEmojisList()
      : this.getWinOrLossCard()

    return (
      <div>
        <div className="app-container">
          <NavBar
            score={score}
            topScore={topScore}
            isGameInprogress={isGameInprogress}
          />
          <div className="emojis-list-container">
            {isGameInprogressOrComplete}
          </div>
        </div>
      </div>
    )
  }
}
export default EmojiGame
