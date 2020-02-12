
import React from "react"
import { Link } from "react-router-dom"
import CommentContainer from "../comment/comment_container"


class FeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    renderLikeButton(){
        if (this.props.liked){
            return <img
                className="like-button"
                src={window.images.red_heart}
                onClick={() => this.props.deleteLike(this.props.post.id)}
            />
        } else {
            return <img
                className="like-button"
                src={window.images.heart}
                onClick={() => this.props.createLike({ post_id: this.props.post.id })}
            />
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
                {this.renderLikeButton()} {`${post.likers.length} Likes`}
                <li className="item-user-description" key={`description-${key}`}>
                    <p className="item-user-username">{post.username}</p> {post.description}
                </li>
                <CommentContainer comments={post.comments} postId={post.id}/>
            </ul>
        )
    }

}

export default FeedItem;