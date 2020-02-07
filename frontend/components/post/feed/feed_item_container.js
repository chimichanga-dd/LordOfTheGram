import { connect } from "react-redux"
import FeedItem from "./feed_item"
import { createLike, deleteLike } from "../../../actions/like_actions"


const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like))
})


export default connect(mapStateToProps,mapDispatchToProps)(FeedItem)