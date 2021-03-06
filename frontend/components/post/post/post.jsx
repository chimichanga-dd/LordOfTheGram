
import React from "react";
import CommentContainer from "../comment/comment_container"
import CommentFormContainer from "../comment/comment_form_container"
import { getTimeElapsed } from "../../../util/date_util"

class Post extends React.Component{

    constructor(props){
        super(props)
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
    }


    handleDoubleClick() {
        if (this.props.liked) {
            this.props.deleteLike(this.props.postId)
        } else {
            this.props.createLike({ post_id: this.props.postId })
        }
    }

    renderLikeButton() {
        let likeButton
        if (this.props.liked) {
            likeButton = <img
                className="like-button button-image"
                src={window.images.red_heart}
                onClick={() => this.props.deleteLike(this.props.postId)}
            />
        } else {
            likeButton = <img
                className="like-button button-image"
                src={window.images.heart}
                onClick={() => this.props.createLike({ post_id: this.props.postId })}
            />
        }
        return (
            <div className="button-row">
                {likeButton} <img className="button-image" src={window.images.comment} alt="non-functional comment button" />
            </div>
        )
    }

    renderPostDeleteButton(){
        if (this.props.posterId == this.props.currentUserId){
            return <img className="delete-button"
                        src={window.images.trash} 
                        alt="delete post button"
                        onClick={() => this.props.deletePost(this.props.postId).then( 
                                 () => this.props.closeModal())
                        }
                    />
        } else {
            return null
        }
    }

    renderPostDescription(post){
        if (post.description){
            return <div className="item-user-description">
                <p>{post.description}</p>
            </div>
        } else {
            return null
        }
    }

    render(){
        let {  postId, poster, post } = this.props

        if (!post){
            return null;
        } else {
            const likes = post.likers.length == 1 ? "like" : "likes"
            return (
                <div className="post-container">
                    <div className="photo-container">
                        <img className="photo" src={post.photo_url} alt="post photo" onDoubleClick={this.handleDoubleClick}/>
                    </div>
                    
                    <div className="photo-right">
                        <div className="poster-link-container">
                            <a
                                className="poster-link-username"
                                href={`#/users/${poster.id}`}
                                onClick={this.props.closeModal}
                            >
                                <img
                                    className="poster-link-image"
                                    src={poster.picture}
                                    alt={`profile picture of ${poster}`}
                                />
                            </a>
                            <a
                                className="poster-link-username"
                                href={`#/users/${poster.id}`}
                                onClick={this.props.closeModal}
                            >
                                <p className="bold">{poster.username}</p>
                            </a>
                            {this.renderPostDeleteButton()}
                        </div>
                        {this.renderPostDescription(post)}
                        <CommentContainer comments={post.comments} postOwnerId={post.author_id}/>
                        <div className="item-buttons-likes-description">
                            {this.renderLikeButton()}
                            <p className="likes bold">{post.likers.length} {likes}</p>
                        </div>
                        <p className="post-date">{getTimeElapsed(post.post_date) + " ago"}</p>
                        <CommentFormContainer postId={postId} />
                    </div>
                </div>
            )
        }
    }
}

export default Post