
import { connect } from "react-redux"
import UserPage from "./user_page"
import { fetchUser } from "../../actions/user_actions"
import { createFollow, deleteFollow } from "../../actions/follow_actions"
import { getImagesForUser } from "../../util/selectors"

const mapStateToProps = (state, {match}) => {
    const currentUserId = state.session.id
    const profileId = match.params.userId
    const profile = state.entities.users[profileId]
    const images = getImagesForUser(state, profileId);
    let following

    if (profile && profile.followers.length > 0){
        following = profile.followers.includes(currentUserId)
    }

    return {
        currentUserId,
        profileId,
        profile,
        images,
        following
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user_id) => dispatch(fetchUser(user_id)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)