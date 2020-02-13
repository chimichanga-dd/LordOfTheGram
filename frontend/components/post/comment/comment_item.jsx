
import React from "react"
import { Link } from "react-router-dom"

class CommentItem extends React.Component {

    constructor(props) {
        super(props)

        let { postId } = this.props

        this.state = {
            post_id: postId,
            text: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateAttribute(attribute) {
        return (e) => this.setState({ [attribute]: e.currentTarget.value })
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state).then(this.setState({ text: "" }))
    }

    render() {
        return (
            <div className="comments-container">
                {this.renderComments()}
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.updateAttribute("text")}
                        placeholder="Add a comment..."
                    />
                    <button className="bold" disabled={!this.state.text} type="submit">Post</button>
                </form>
            </div>
        )
    }

}

export default CommentItem