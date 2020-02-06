import { connect } from "react-redux"
import { createPost } from "../../../actions/post_actions"
import UploadItem from "./upload_item"

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({
    createPost: (post) => dispatch(createPost(post))
})

export default connect(mapStateToProps,mapDispatchToProps)(UploadItem)