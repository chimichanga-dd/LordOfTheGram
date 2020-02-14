
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
                        <img className="profile-picture" src={profile.picture}/>
                        <div className="profile-info-right">
                            <div className="profile-user">
                                <p className="profile-user-username">{profile.username}</p>
                                <button 
                                    className="profile-edit-button medium-bold"
                                    onClick={() => this.props.history.push("/profile/edit")}
                                    >Edit Profile
                                </button>
                                <img 
                                    className="logout-button"
                                    src={window.images.logout}
                                    onClick={this.props.logout}/
                                >
                            </div>
                            <ul className="profile-stats">
                                <li>
                                    <p className="stat-count bold">{images.length}</p>
                                    <p className="stat-label">posts</p>
                                </li>
                                <li>
                                    <p className="stat-count bold">{profile.followers.length}</p>
                                    <p className="stat-label">followers</p>
                                </li>
                                <li>
                                    <p className="stat-count bold">{profile.following.length}</p>
                                    <p className="stat-label">following</p>
                                </li>
                            </ul>
                            <div className="profile-bio">{profile.bio}</div>
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