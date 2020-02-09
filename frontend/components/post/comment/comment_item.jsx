
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
            return <button onClick={ () => this.props.deleteComment(commentId)}> DELETE</button>
        } else {
            return null
        }
    }

    renderComments() {
        let { comments } = this.props

        console.log(comments)

        if (comments) {
            return Object.values(comments).map((comment, idx) => {
                return (
                    <ul className="comment-container" key={`container-${idx}`}>
                        <li className="comment-photo" key={`photo-${idx}`}>
                            <Link to={`users/${comment.user_id}`}>
                                <img src={comment.user_photo} height="50px" width="50px" />
                            </Link>
                        </li>
                        <li className="comment-username" key={`username-${idx}`}>
                            <Link to={`users/${comment.user_id}`}>
                                <p>{comment.user}</p>
                            </Link>
                        </li>
                        <li className="comment-text" key={`text-${idx}`}>{comment.text}</li>
                        {this.renderDeleteButton(comment.user_id, comment.id)}
                    </ul>
                )
            })
        } else {
            return <p className="alt-comments">Be the first to comment!</p>
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
                        placeholder="comment here"
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }

}

export default CommentItem