
import React from "react"

class FollowItem extends React.Component{

    constructor(props){
        super(props)

        this.renderFollowButton = this.renderFollowButton.bind(this)
        this.renderNotFollowed = this.renderNotFollowed.bind(this)
    }

    componentDidMount(){
        this.props.getNotFollowed()
    }
    
    renderFollowButton(user){
        if (!this.props.following.includes(user.id)){
            return <button className="bold" onClick={() => 
                this.props.createFollow({ user_id: this.props.currentUserId, following_id: user.id }).then( () =>
                this.props.fetchUser(this.props.currentUserId).then( () =>
                this.props.fetchPosts(this.props.numOfPosts).then( () =>
                this.props.getNotFollowed()
                )))}>Follow</button>
        } else {
            return null
        }
    }

    renderNotFollowed(){
        let output;
        if (this.props.notFollowed.length > 0){
            output = this.props.notFollowed.map(
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
                                        />
                                        <p className="bold">{user.username}</p>
                                    </label>
                                </a>
                                {this.renderFollowButton(user)}
                            </li>
                        )
                    }
            )
        } else {
            output = <p className="not-followed-user-container">You follow every user</p>
        }
        return output;
    }


    render(){
        return(
            <ul className="not-followed-container">
                <h2 className="bold">Suggestions For You</h2>
                {this.renderNotFollowed()}
            </ul>
        )
    }
}

export default FollowItem