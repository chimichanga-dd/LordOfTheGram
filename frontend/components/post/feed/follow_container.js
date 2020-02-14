import { connect } from "react-redux"
import FollowItem from "./follow"
import {getNotFollowed} from "../../../actions/follow_actions"


const mapStateToProps = (state) => {
    let notFollowed = state.entities.follows;

    return {
        notFollowed: Object.values(state.entities.follow)
    }
}


const mapDispatchToProps = (dispatch) => ({
    getNotFollowed: () => dispatch(getNotFollowed())
})

export default connect(mapStateToProps,mapDispatchToProps)(FollowItem)