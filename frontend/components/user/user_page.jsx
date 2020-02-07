
import React from "react"

class UserPage extends React.Component{


    componentDidMount(){
        if (this.props.profileId == this.props.currentUserId){
            this.props.history.push("/profile")
        }
        this.props.fetchUser(this.props.profileId)
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
        return images.map( (image, idx) => 
            <img 
                className="profile-post-thumbnail" 
                src={image.photo_url} 
                width="200px" height="200px"
                key={`thumbnail-${idx}`}
            />
        )
    }

    renderFollowButton(){
        let { following, profileId, currentUserId } = this.props
        if (following){
            return  <button onClick={() => this.props.deleteFollow(profileId)}>Unfollow</button>
        } else {
            return <button onClick={() => this.props.createFollow({ user_id: currentUserId, following_id: profileId}) }>Follow</button>
        }
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
                        <div className="profile-username">
                            {profile.username}
                            {this.renderFollowButton()}
                        </div>
                        <div className="profile-stats">
                            <p className="stat-count">images.length}</p>
                            <p className="stat-label">Posts</p>
                            <p className="stat-count">{profile.followers.length}</p>
                            <p className="stat-label">Followers</p>
                            <p className="stat-count">{profile.following.length}</p>
                            <p className="stat-label">Following</p>
                        </div>
                        <div className="profile-bio">Bio: {profile.bio}</div>
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