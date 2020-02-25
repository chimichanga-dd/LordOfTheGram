
import React from "react"
import Loader from "../ui/loader"

class UserPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        if (this.props.profileId == this.props.currentUserId){
            this.props.history.push("/profile")
        }
        this.props.fetchUser(this.props.profileId).then( 
            () => { this.setState({ loading: false }); window.scrollTo(0, 0) }
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.profileId !== prevProps.profileId) {
            console.log("changed")
            this.setState({ loading: true })
            window.scrollTo(0, 0)
            this.props.fetchUser(this.props.profileId).then( () =>
                setTimeout( () => this.setState({ loading: false }), 1000)
            )
        }

        if (this.props.profileId == this.props.currentUserId) {
            this.props.history.push("/profile")
        }
    }
    
    createImageThumbnails(images){
        return <ul className="profile-posts">
            {images.map((image) =>
                <li className="profile-post-container" key={image.id}>
                    <div>
                        <img
                            className="profile-post-thumbnail"
                            src={image.photo_url}
                            key={`thumbnail-${image.id}`}
                        />
                    </div>
                    <div className="post-stats"
                        onClick={() => this.props.openModal({ posterId: this.props.profileId, postId: image.id })}
                    >
                        <div className="post-stat-likes">
                            <img src={window.images.white_heart} alt="heart icon" />
                            <p className="bold">{image.likers.length}</p>
                        </div>
                        <div className="post-stat-comments">
                            <img src={window.images.white_comment} alt="speech bubble" />
                            <p className="bold">
                                {image.comments ? Object.keys(image.comments).length : 0}
                            </p>
                        </div>
                    </div>
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

        if (this.state.loading) {
            return <Loader />
        } else if (!this.state.loading) {
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
        } else if (!profile) {
            return (
                <div className="MissingUser">
                    Unavailable Requested User
                </div>
            )
        }
    }

}

export default UserPage