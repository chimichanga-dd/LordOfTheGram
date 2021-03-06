
import React from "react"
import { Link } from "react-router-dom"
import CommentContainer from "../comment/comment_container"
import CommentFormContainer from "../comment/comment_form_container"
import {getTimeElapsed} from "../../../util/date_util"


class FeedItem extends React.Component{

    constructor(props){
        super(props)
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
    }

    handleDoubleClick(){
        if (this.props.liked){
            this.props.deleteLike(this.props.post.id)
        } else {
            this.props.createLike({ post_id: this.props.post.id })
        }
    }

    renderLikeButton(){
        let likeButton
        if (this.props.liked){
            likeButton = <img
                className="like-button button-image"
                src={window.images.red_heart}
                onClick={() => this.props.deleteLike(this.props.post.id)}
            />
        } else {
            likeButton = <img
                className="like-button button-image"
                src={window.images.heart}
                onClick={() => this.props.createLike({ post_id: this.props.post.id })}
            />
        }
        return(
            <div className="button-row">
                {likeButton}
                <img className="button-image" src={window.images.comment} alt="non-functional comment button"/>
            </div>
        )
    }

    render(){
        const {post, key} = this.props
        const likes = post.likers.length == 1 ? "like" : "likes"

        return (
            <ul className="index-item">
                <li className="item-user-info" key={`author-id-${key}`}>
                    < Link to={`users/${post.author_id}`}>
                        <img className="item-user-picture" src={post.user_picture_url} />
                        <p className="item-user-username bold">{post.username}</p>
                    </Link>
                </li>
                <li key={`photo-${key}`}>
                    <img className="item-info-image" src={post.photo_url} onDoubleClick={this.handleDoubleClick}/>
                </li>
                <li className="item-buttons-likes-description">
                    {this.renderLikeButton()} 
                    <p className="likes bold">{post.likers.length} {likes}</p>
                    <div className="item-user-description">
                        <p className="item-user-username bold">{post.username}</p> {post.description}
                    </div>
                </li>
                <CommentContainer comments={post.comments}/>
                <p className="post-date">{getTimeElapsed(post.post_date) + " ago"}</p>
                <CommentFormContainer postId={post.id}/>
            </ul>
        )
    }

}

export default FeedItem;