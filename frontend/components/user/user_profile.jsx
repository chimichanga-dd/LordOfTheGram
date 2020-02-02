
import React from "react"

class UserProfile extends React.Component{


    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    createImageThumbnails(images){
        return images.map( (image, idx) => 
            <img 
                className="profile-post-thumbnail" 
                src={image.photo_url} 
                width="200px" height="200px"
                key={`thumbnail-${idx}`}
            />
        )
    }


    render(){
        let {user, images} = this.props
        images = this.createImageThumbnails(images)

        if (!user) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div className="profile-container">
                    <div className="profile-info">
                        <img className="profilee-picture" src={user.picture} width="200px" height="200px" />
                        <div className="profile-username">{user.username}</div>
                        <div className="profile-bio">Bio: {user.bio}</div>
                    </div>
                    <div className="profile-posts">
                        {images}
                    </div>
                </div>

            )
        }
    }

}

export default UserProfile