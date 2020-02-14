
import React from "react"

class FollowItem extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getNotFollowed()
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
                                
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }
}

export default FollowItem