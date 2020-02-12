
import React from "react"
import { Link } from "react-router-dom"
import CommentContainer from "../comment/comment_container"


class FeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    renderLikeButton(){
        if (this.props.liked){
            return <button
                className="like-button"
                onClick={() => this.props.deleteLike(this.props.post.id)}
            >Like</button>
        } else {
            return <button
                className="like-button"
                onClick={() => this.props.createLike({ post_id: this.props.post.id })}
            >Like</button>
        }
    }

    render(){
        const {post, key} = this.props

        return (
            <ul className="index-item" key={`index-item-${key}`}>
                <li className="item-user-info" key={`author-id-${key}`}>
                    < Link to={`users/${post.author_id}`}>
                        <img className="item-user-picture" src={post.user_picture_url} />
                        <p className="item-user-username">{post.username}</p>
                    </Link>
                </li>
                <li className="item-info" key={`photo-${key}`}>
                    <img className="item-info-image" src={post.photo_url}/>
                </li>
                <li className="item-info" key={`description-${key}`}>
                    {post.description}
                </li>
                {`${post.likers.length} Likes`}
                {this.renderLikeButton()}
                <CommentContainer comments={post.comments} postId={post.id}/>
            </ul>
        )
    }

}

export default FeedItem;