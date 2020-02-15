
import React from "react"

class FollowItem extends React.Component{

    constructor(props){
        super(props)

        this.renderFollowButton = this.renderFollowButton.bind(this)
    }

    componentDidMount(){
        this.props.getNotFollowed()
    }
    
    renderFollowButton(user){
        if (!this.props.following.includes(user.id)){
            return <button onClick={() => 
                this.props.createFollow({ user_id: this.props.currentUserId, following_id: user.id }).then( () =>
                this.props.fetchUser(this.props.currentUserId).then( () =>
                this.props.fetchPosts(this.props.numOfPosts)
                ))}>Follow</button>
        } else {
            return null
        }
    }


    render(){
        return(
            <ul className="not-followed-container">
                {this.props.notFollowed.map(
                    (user, idx) => {
                        return (
                            <li className="not-followed-user-container" key={idx}>
                                <a
                                    className="search-link"
                                    href={`#/users/${user.id}`}
                                    key={user.id}
                                >
                                    <label className="search-link-person">
                                        <img
                                            src={user.picture}
                                            alt={`profile picture of ${user}`}
                                            height="50px" width="50px" /> {user.username}
                                    </label>
                                </a>
                                {this.renderFollowButton(user)}
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }
}

export default FollowItem