
import React from "react"
import IndexItemContainer from "./feed_item_container"

class Feed extends React.Component{

    componentDidMount(){
        this.props.fetchPosts(this.state.offset)
    }

    constructor(props){
        super(props)
        this.state = {
            offset: 2
        }
    }

    render(){
        let {posts} = this.props
        let output
        if(posts){
            output = <div className="feed">
                {posts.map((post, idx) => { 
                    return <IndexItemContainer post={post} key={idx} />
                })}
            </div >
        } else {
            output = <div className="feed">
               loading
            </div >
        }
        return output
    }
}

export default Feed
