
import { connect } from "react-redux"
import UserShow from "./user_show"
import { fetchUser } from "../../actions/user_actions"

const mapStateToProps = (state, {match}) => {
    const userId = match.params.userId
    const user = state.entities.users[userId]

    return {
        userId,
        user
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user_id) => dispatch(fetchUser(user_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)