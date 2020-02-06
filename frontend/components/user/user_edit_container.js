import { connect } from "react-redux"
import { updateUser, fetchUser } from "../../actions/user_actions"
import UserEditItem from "./user_edit_item"

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEditItem)