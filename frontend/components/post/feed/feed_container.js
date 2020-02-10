
import Feed from "./feed";
import { connect } from "react-redux"
import { fetchPosts } from "../../../actions/post_actions"

const mapStateToProps = (state) => ({
    posts: Object.values(state.entities.posts).reverse() || []
})

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: (offset) => dispatch(fetchPosts(offset))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
