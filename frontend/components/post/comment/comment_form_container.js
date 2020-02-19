import { connect } from "react-redux"
import CommentForm from "./comment_form"
import { createComment } from "../../../actions/comment_actions"


const mapsStateToProps = (state, ownProps) => ({
    postId: ownProps.postId,
})

const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
})

export default connect(mapsStateToProps, mapDispatchToProps)(CommentForm)