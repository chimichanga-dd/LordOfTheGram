import { connect } from "react-redux"
import CommentItem from "./comment_item"
import { createComment, deleteComment } from "../../../actions/comment_actions"


const mapsStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    postId: ownProps.postId,
    comments: ownProps.comments
})

const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

export default connect(mapsStateToProps,mapDispatchToProps)(CommentItem)