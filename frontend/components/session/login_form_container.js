import { connect } from "react-redux"
import SessionForm from "./session_form"
import { signIn } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
    formAction: "Log ip!"
})

const mapDispatchToProps = (dispatch) => ({
    submitForm: (user) => dispatch(signIn(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)