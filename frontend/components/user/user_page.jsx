
import React from "react"

class UserPage extends React.Component{


    componentDidMount(){
        if (this.props.profileId == this.props.currentUserId){
            this.props.history.push("/profile")
        }
        this.props.fetchUser(this.props.profileId)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        if (this.props.profileId !== prevProps.profileId) {
            setTimeout(() => this.props.fetchUser(this.props.profileId), 500)
        }

        if (this.props.profileId == this.props.currentUserId) {
            this.props.history.push("/profile")
        }
    }

    createImageThumbnails(images){
        return <ul className="profile-posts">
            {images.map((image, idx) =>
                <li className="profile-post-container" key={idx}>
                    <img
                        className="profile-post-thumbnail"
                        src={image.photo_url}
                        key={`thumbnail-${idx}`}
                        onClick={() => this.props.openModal({ posterId: this.props.profileId, postId: image.id })}
                    />
                </li>
            )}
        </ul>
    }

    renderFollowButton(){
        let { following, profileId, currentUserId } = this.props
        if (following){
            return  <button 
                    className="follow-button"
                        onClick={() => this.props.deleteFollow(profileId)}
                    >Unfollow</button>
        } else {
            return <button 
                    className="follow-button"
                    onClick={() => this.props.createFollow({ user_id: currentUserId, following_id: profileId}) }
                    >Follow</button>
        }
    }


    render(){
        let {profile, images} = this.props
        let postCount = images.length
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
                        <div className="profile-picture-container">
                            <img className="profile-picture" src={profile.picture} />
                        </div>
                        <div className="profile-info-right">
                            <div className="profile-user">
                                <p className="bold profile-user-username">{profile.username}</p>
                                {this.renderFollowButton()}
                            </div>
                            <ul className="profile-stats">
                                <li>
                                    <p className="stat-count bold">{postCount}</p>
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
                    {images}
                </div>

            )
        }
    }

}

export default UserPage