import { connect } from "react-redux"
import CommentItem from "./comment_item"
import { deleteComment } from "../../../actions/comment_actions"
import { removeModal } from "../../../actions/modal_actions"


const mapsStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    comments: ownProps.comments
})

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    closeModal: () => dispatch(removeModal())
})

export default connect(mapsStateToProps,mapDispatchToProps)(CommentItem)