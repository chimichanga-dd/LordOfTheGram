import { connect } from "react-redux"
import FollowItem from "./follow"
import { getNotFollowed, createFollow, deleteFollow } from "../../../actions/follow_actions"


const mapStateToProps = (state, { match }) => {
    const notFollowed = state.entities.follow;
    const currentUserId = state.entities.users
    const currentUser = state.entities.users[currentUserId]
    let following

    if (currentUser){
        following = currentUser.following
    }

    return {
        notFollowed: Object.values(notFollowed),
        following,
        currentUserId
    }
}


const mapDispatchToProps = (dispatch) => ({
    getNotFollowed: () => dispatch(getNotFollowed()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowItem)