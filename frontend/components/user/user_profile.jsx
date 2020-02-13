
import React from "react"
import { Link } from "react-router-dom"

class UserPage extends React.Component{


    componentDidMount(){
        if (!this.props.profile){
            this.props.fetchUser(this.props.currentUserId)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.profileId !== prevProps.profileId) {
            setTimeout(() => this.props.fetchUser(this.props.profileId), 500)
        }
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
        let {profile, images} = this.props
        images = this.createImageThumbnails(images)

        if (!profile) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div className="profile-container">
                    <div className="profile-info">
                        <img className="profilee-picture" src={profile.picture} width="200px" height="200px" />
                        <div className="profile-info-right">
                            <div className="profile-username">
                                {profile.username} <Link to="/profile/edit">Edit</Link> <button onClick={this.props.logout}>Logout!</button>
                            </div>
                            <div className="profile-stats">
                                <p className="stat-count">{images.length}</p>
                                <p className="stat-label">Posts</p>
                                <p className="stat-count">{profile.followers.length}</p>
                                <p className="stat-label">Followers</p>
                                <p className="stat-count">{profile.following.length}</p>
                                <p className="stat-label">Following</p>
                            </div>
                            <div className="profile-bio">Bio: {profile.bio}</div>
                        </div>
                    </div>
                    <div className="profile-posts">
                        {images}
                    </div>
                </div>
            )
        }
    }

}

export default UserPage