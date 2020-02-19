
import React from "react";

class Post extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        let { currentUserId, posterId, postId, poster, post } = this.props
        return (
            <div className="photo-container">
                <img className="photo" src={post.photo_url} alt=""/>
            </div>
        )
    }
}

export default Post