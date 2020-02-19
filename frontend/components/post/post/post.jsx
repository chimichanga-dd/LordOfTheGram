
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
                <div classname="photo-right">
                    <div className="poster-link-container">
                        <a
                            className="poster-link"
                            href={`#/users/${poster.id}`}
                            key={poster.id}
                        >
                            <label className="poster-link-person">
                                <img
                                    src={poster.picture}
                                    alt={`profile picture of ${poster}`}
                                />
                                <p className="bold">{poster.username}</p>
                            </label>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Post