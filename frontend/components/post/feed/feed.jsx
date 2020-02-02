
import React from "react"
import IndexItem from "./feed_item"

class Feed extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    constructor(props){
        super(props)
    }

    render(){
        let {posts} = this.props
        let output
        if(posts){
            output = <div className="feed">
                {posts.map((post, idx) => { 
                    return <IndexItem post={post} key={idx} />
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
