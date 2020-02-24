
import Feed from "./feed";
import { connect } from "react-redux"
import { fetchPosts, clearPosts } from "../../../actions/post_actions"
import { getNotFollowed} from "../../../actions/follow_actions"

const mapStateToProps = (state) => {
    let currentUserId = state.session.id
    let currentUserFollowing = state.entities.users[currentUserId].following
    
    return {
        posts: Object.values(state.entities.posts).reverse() || [],
        currentUserFollowing
    }
}

const mapDispatchToProps = (dispatch) => ({
    getNotFollowed: () => dispatch(getNotFollowed()),
    fetchPosts: (offset) => dispatch(fetchPosts(offset)),
    clearPosts: () => dispatch(clearPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
