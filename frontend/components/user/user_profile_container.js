
import { connect } from "react-redux"
import UserProfile from "./user_profile"
import { fetchUser } from "../../actions/user_actions"
import { getImagesForUser } from "../../util/selectors"
import { signOut } from "../../actions/session_actions"
import { receiveModal } from "../../actions/modal_actions"

const mapStateToProps = (state) => {
    const currentUserId = state.session.id
    const profile = state.entities.users[currentUserId]
    const images = getImagesForUser(state, currentUserId);
    
    return {
        currentUserId,
        profile,
        images
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user_id) => dispatch(fetchUser(user_id)),
    logout: () => dispatch(signOut()),
    openModal: (modal) => dispatch(receiveModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)