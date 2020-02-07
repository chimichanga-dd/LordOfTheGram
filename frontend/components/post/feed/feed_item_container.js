import { connect } from "react-redux"
import FeedItem from "./feed_item"
import { createLike, deleteLike } from "../../../actions/like_actions"


const mapStateToProps = (state, ownProps) => ({
    liked: ownProps.post.likers.includes(state.session.id)
})

const mapDispatchToProps = (dispatch) => ({
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (postId) => dispatch(deleteLike(postId))
})


export default connect(mapStateToProps,mapDispatchToProps)(FeedItem)