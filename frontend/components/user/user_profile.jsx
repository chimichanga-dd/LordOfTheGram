
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
        if (!this.props.profile){
            this.props.fetchUser(this.props.currentUserId).then(
                () => window.scrollTo(0, 0)
            )
        }
        this.setState({ loading: false })
        window.scrollTo(0, 0)
    }

    createImageThumbnails(images){
        return <ul className="profile-posts">
            {images.map( (image) =>
                <li className="profile-post-container" key={image.id}>
                    <div>
                        <img
                            className="profile-post-thumbnail"
                            src={image.photo_url}
                            key={`thumbnail-${image.id}`}
                        />
                    </div>
                    <div className="post-stats"
                         onClick={() => this.props.openModal({ posterId: this.props.currentUserId, postId: image.id })}
                    >
                        <div className="post-stat-likes">
                            <img src={window.images.white_heart} alt="heart icon"/>
                            <p className="bold">{image.likers.length}</p>
                        </div>
                        <div className="post-stat-comments">
                            <img src={window.images.white_comment} alt="speech bubble"/>
                            <p className="bold">
                                {image.comments ? Object.keys(image.comments).length : 0}
                            </p>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    }

    render(){
        let {profile, images} = this.props
        let postCount = images.length
        images = this.createImageThumbnails(images)

        if (this.state.loading) {
            return <Loader />
        } else if (!this.state.loading){
            return <div className="profile-container">
                    <div className="profile-info">
                        <div className="profile-picture-container">
                            <img className="profile-picture" src={profile.picture} />
                        </div>
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
                                    onClick={this.props.logout}
                                />
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
        }
    }

}

export default UserPage