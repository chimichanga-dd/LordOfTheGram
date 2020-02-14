import { connect } from "react-redux"
import FollowItem from "./follow"
import getNotFollowed from "../../../actions/follow_actions"


const mapStateToProps = () => {

}


const mapDispatchToProps = () => ({
    getNotFollowed: () => dispatch(getNotFollowed())
})

export default connect(mapStateToProps,mapDispatchToProps)(FollowItem)