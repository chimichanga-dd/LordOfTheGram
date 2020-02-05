
import { connect } from "react-redux"
import Nav from "./nav"
import { signOut } from "../../actions/session_actions"
import { fetchUsers , clearSearch} from "../../actions/user_actions"

const mapStateToProps = (state) => ({
    searchMatches: state.entities.search, //come back to this
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: (userFilter) => dispatch(fetchUsers(userFilter)),
    clearSearch: () => dispatch(clearSearch()),
    logout: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)