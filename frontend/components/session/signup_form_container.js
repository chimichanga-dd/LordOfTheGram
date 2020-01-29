import { connect } from "react-redux"
import SessionForm from "./session_form"
import { signUp } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
    formAction: "Sign up!"
})

const mapDispatchToProps = (dispatch) => ({
    submitForm: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)