
import React from "react"
import { Link } from "react-router-dom"

class CommentItem extends React.Component {

    constructor(props) {
        super(props)
    }

    renderDeleteButton(commenterId, commentId) {
        if (this.props.currentUser == this.props.postOwnerId || this.props.currentUser == commenterId) {
            return <img className="button-remove"
                        src={window.images.remove}
                        onClick={ () => this.props.deleteComment(commentId)}
                    />
        } else {
            return null
        }
    }

    renderComments() {
        let { comments } = this.props

        if (comments) {
            return Object.values(comments).map((comment, idx) => {
                return (
                    <ul className="comment-container" key={`container-${idx}`}>
                        <li className="comment-username" key={`username-${idx}`}>
                            <Link to={`users/${comment.user_id}`}>
                                <p className="bold">{comment.user}</p>
                            </Link>
                        </li>
                        <li className="comment-text" key={`text-${idx}`}>{comment.text}</li>
                        {this.renderDeleteButton(comment.user_id, comment.id)}
                    </ul>
                )
            })
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="comments-container">
                {this.renderComments()}
            </div>
        )
    }

}

export default CommentItem