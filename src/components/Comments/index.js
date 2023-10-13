import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentList: [], name: '', commentName: '', count: 0}

  onClickNameChange = event => {
    this.setState({name: event.target.value})
  }

  onClickCommentChange = event => {
    this.setState({commentName: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, commentName} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      commentName,
      date: formatDistanceToNow(new Date()),
      isLike: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      commentName: '',
      count: prevState.count + 1,
    }))
  }

  deleteMessage = id => {
    const {commentList, count} = this.state
    const filterCommentList = commentList.filter(each => each.id !== id)
    this.setState({commentList: filterCommentList, count: count - 1})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isLike: !eachContact.isLike}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {commentList, name, commentName, count} = this.state
    console.log(commentName)
    console.log(name)

    return (
      <div>
        <div className="Container">
          <div className="detailsContainer">
            <h1>Comments</h1>
            <p>Say something about 4.o Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="input-name"
                value={name}
                onChange={this.onClickNameChange}
              />
              <div className="comment-container">
                <textarea
                  type="text area "
                  placeholder="Your Comment"
                  className="comment-input"
                  onChange={this.onClickCommentChange}
                  value={commentName}
                >
                  {' '}
                </textarea>
              </div>
              <button type="submit" className="button1">
                add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div className="commentPrintContainer">
          <button type="button" className="button1">
            {count}
          </button>
          <p>Comments</p>
        </div>
        <ul>
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentMessage={eachComment}
              toggleIsFavorite={this.toggleIsFavorite}
              deleteMessage={this.deleteMessage}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
