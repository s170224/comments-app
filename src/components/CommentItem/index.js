import './index.css'

const CommentItem = props => {
  const {commentMessage, toggleIsFavorite, deleteMessage} = props
  const {id, name, commentName, date, isLike, initialClassName} = commentMessage

  const likeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const OnClickFavoriteItem = () => {
    toggleIsFavorite(id)
  }

  const OnDeleteComment = () => {
    deleteMessage(id)
  }

  return (
    <li>
      <div className="itemContainer">
        <button type="button" className={initialClassName}>
          {name[0]}
        </button>
        <h1 className="nameHeading">{name}</h1>
        <p className="paraDate">{date}</p>
      </div>
      <p>{commentName}</p>
      <div>
        <button onClick={OnClickFavoriteItem}>
          <img src={likeImage} alt="like" /> Like
        </button>
        <button
          type="button"
          onClick={OnDeleteComment}
          className="deleteButton"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
