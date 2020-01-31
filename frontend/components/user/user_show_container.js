
import { connect } from "react-redux"
import UserShow from "./user_show"

const mapStateToProps = (state, {match}) => ({
      userId: match.params.userId
})

const mapDispatchToProps = (dispatch) => ({
    //fetchUser
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)