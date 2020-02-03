
import { connect } from "react-redux"
import UserProfile from "./user_profile"
import { fetchUser } from "../../actions/user_actions"
import { getImagesForUser } from "../../util/selectors"

const mapStateToProps = (state, {match}) => {
    const userId = match.params.userId
    const user = state.entities.users[userId]
    const images = getImagesForUser(state, userId);
    
    return {
        userId,
        user,
        images
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user_id) => dispatch(fetchUser(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)