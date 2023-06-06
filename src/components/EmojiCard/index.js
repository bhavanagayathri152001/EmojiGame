import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onClickEmojiImage} = props
  const {emojiUrl, emojiName, id} = emojiCardDetails
  const onClick = () => {
    onClickEmojiImage(id)
  }
  return (
    <li className="emoji-card-container">
      <button type="button" className="button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-image"
          onClick={onClick}
        />
      </button>
    </li>
  )
}
export default EmojiCard
