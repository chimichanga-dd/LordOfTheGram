
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
            return Object.values(comments).map((comment) => {
                return (
                    <ul className="comment-container" key={comment.id}>
                        <li className="comment-username" key={comment.id}>
                            <Link to={`users/${comment.user_id}`} onClick={this.props.closeModal}>
                                <p className="bold">{comment.user}</p>
                            </Link>
                        </li>
                        <li className="comment-text" key={comment.id}>{comment.text}</li>
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