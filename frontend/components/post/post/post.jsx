
import React from "react";
import CommentContainer from "../comment/comment_container"
import CommentFormContainer from "../comment/comment_form_container"

class Post extends React.Component{

    constructor(props){
        super(props)
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

    render(){

        let { currentUserId, currentUser, posterId, postId, poster, post } = this.props
        const likes = post.likers.length == 1 ? "like" : "likes"
        return (
            <div className="post-container">
                <img className="photo" src={post.photo_url} alt=""/>
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
                    </div>
                    <div className="item-user-description">
                        <p className="item-user-username bold">{post.username}</p> {post.description}
                    </div>
                    <CommentContainer comments={post.comments} />
                    <div className="item-buttons-likes-description">
                        {this.renderLikeButton()}
                        <p className="likes bold">{post.likers.length} {likes}</p>
                    </div>
                    <CommentFormContainer postId={postId} />
                </div>
            </div>
        )
    }
}

export default Post