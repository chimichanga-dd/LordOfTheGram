
import React from "react"
import { Link } from "react-router-dom"

class CommentItem extends React.Component{

    constructor(props){
        super(props)
    }

    renderComments(){
        let {comments} = this.props

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
                    </ul>
                )
            })
        } else {
            return <p>Be the first to comment!</p>
        }
    }

    render(){
        return (
            <div className="comments-container">
                {this.renderComments()}
            </div>
        )
    }

}

export default CommentItem