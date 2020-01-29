
import { connect } from "react-redux"
import Greeting from "./greeting"
import { signOut } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)