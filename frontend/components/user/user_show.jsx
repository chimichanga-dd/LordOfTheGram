
import React from "react"

class UserShow extends React.Component{


    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render(){
        let {user} = this.props
        console.log(user)
        if (!user) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div>
                    <img src={user.picture} width="200px" height="200px" />
                </div>
            )
        }
    }

}

export default UserShow