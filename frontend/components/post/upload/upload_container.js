import { connect } from "react-redux"
import { createPost } from "../../../actions/post_actions"
import { fetchUser } from "../../../actions/user_actions"
import UploadItem from "./upload_item"

const mapStateToProps = (state) => ({
    userId: state.session.id
})

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(UploadItem)