
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
                    (user) => {
                        return (
                            <li className="not-followed-user-container">
                                {user.username}
                            </li>
                        )
                    }
                )}
            </ul>
        )
    }
}

export default FollowItem