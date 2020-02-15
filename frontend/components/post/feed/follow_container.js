import { connect } from "react-redux"
import FollowItem from "./follow"
import { getNotFollowed, createFollow, deleteFollow } from "../../../actions/follow_actions"
import { fetchUser } from "../../../actions/user_actions"
import { fetchPosts } from "../../../actions/post_actions"


const mapStateToProps = (state, { match }) => {
    const notFollowed = state.entities.follow;
    const currentUserId = state.session.id
    const currentUser = state.entities.users[currentUserId]
    const numOfPosts = Object.keys(state.entities.posts).length
    let following

    if (currentUser){
        following = currentUser.following
    }

    return {
        notFollowed: Object.values(notFollowed),
        following,
        currentUserId,
        numOfPosts
    }
}


const mapDispatchToProps = (dispatch) => ({
    getNotFollowed: () => dispatch(getNotFollowed()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (offset) => dispatch(fetchPosts(offset))
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowItem)