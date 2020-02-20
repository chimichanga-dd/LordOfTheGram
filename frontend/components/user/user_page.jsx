
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
                <div className="MissingUser">
                    Unavailable Requested User
                </div>
            )
        } else if (this.state.loading){
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
        }
    }

}

export default UserPage