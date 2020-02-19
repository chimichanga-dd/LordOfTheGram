import { connect } from "react-redux"
import CommentItem from "./comment_item"
import { createComment, deleteComment } from "../../../actions/comment_actions"


const mapsStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    comments: ownProps.comments
})

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

export default connect(mapsStateToProps,mapDispatchToProps)(CommentItem)