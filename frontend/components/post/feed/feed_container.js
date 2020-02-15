
import Feed from "./feed";
import { connect } from "react-redux"
import { fetchPosts } from "../../../actions/post_actions"

const mapStateToProps = (state) => {
    let currentUserId = state.session.id
    let currentUserFollowing = currentUserId.following
    
    return {
        posts: Object.values(state.entities.posts).reverse() || [],
        currentUserFollowing
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (offset) => dispatch(fetchPosts(offset))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
