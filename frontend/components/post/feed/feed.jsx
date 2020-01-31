
import React from "react"

class Feed extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                FEED
            </div >
        )
    }
}

export default Feed
