
import React from "react"
import IndexItemContainer from "./feed_item_container"
import FollowContainer from "./follow_container"
import Loader from "../../ui/loader"
import throttle from "lodash/throttle"

class Feed extends React.Component{

    componentDidMount(){
        this.props.clearPosts()
        this.props.fetchPosts(this.state.offset).then(
            () => setTimeout( () => {this.setState({ loading: false }); window.scrollTo(0, 0)}, 1000)
        )
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.currentUserFollowing) != JSON.stringify(this.props.currentUserFollowing)){
            this.props.clearPosts()
            this.props.getNotFollowed()
            this.setState({offset: 0})
            this.props.fetchPosts(0)
            window.scrollTo(0, 0)
        }
    }

    componentWillUnmount(){
        this.throttled.cancel()
        window.removeEventListener("scroll", this.throttled)
    }

    constructor(props){
        super(props)
        this.state = {
            offset: 0,
            loading: true
        }

        let fetchMorePosts = () => {
            let { innerHeight } = window
            let { scrollTop, scrollHeight } = document.documentElement
            let distanceToBottom = scrollHeight - scrollTop - innerHeight

            if (distanceToBottom < 1000) {
                this.setState({ offset: this.state.offset + 5 })
                this.props.fetchPosts(this.state.offset)
            }
        }

        this.throttled = throttle(fetchMorePosts.bind(this), 2000)
        window.addEventListener("scroll", this.throttled)

    };
    


    render(){
        let {posts} = this.props
        let output
        if(!this.state.loading){
            output = <div className="feed">
                <div className="feed-main">
                    {posts.map((post, idx) => {
                        return <IndexItemContainer post={post} key={idx} />
                    })}
                </div>
                <div className="feed-right">
                    <div></div>
                    <FollowContainer />
                </div>
                
            </div >
        } else {
            output = <div className="feed">
                <Loader />
            </div >
        }
        return output
    }
}

export default Feed
