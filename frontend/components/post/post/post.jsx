
import React from "react";

class Post extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        let { currentUserId, currentUser, posterId, postId, poster, post } = this.props
        return (
            <div className="post-container">
                <img className="photo" src={post.photo_url} alt=""/>
                <div className="photo-right">
                    <div className="poster-link-container">
                        <a
                            className="poster-link-username"
                            href={`#/users/${poster.id}`}
                            key={poster.id}
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
                            key={poster.id}
                        >
                            <p className="bold">{poster.username}</p>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Post