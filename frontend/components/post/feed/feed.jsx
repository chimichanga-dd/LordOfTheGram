
import React from "react"
import IndexItemContainer from "./feed_item_container"
import throttle from "lodash/throttle"

class Feed extends React.Component{

    componentDidMount(){
        this.props.fetchPosts(this.state.offset)

        let fetchMorePosts = () => {
            let { innerHeight } = window
            let { scrollTop, scrollHeight } = document.documentElement
            let distanceToBottom = scrollHeight - scrollTop - innerHeight

            if (distanceToBottom < 300) {
                this.setState({ offset: this.state.offset + 5 })
                this.props.fetchPosts(this.state.offset)
            }
        }
        let throttled = throttle(fetchMorePosts, 2000)
        window.addEventListener("scroll", throttled)

    }

    constructor(props){
        super(props)
        this.state = {
            offset: 0
        }
    };


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
