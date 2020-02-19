import { connect } from "react-redux"
import { removeModal } from "../../../actions/modal_actions"
import { createLike, deleteLike } from "../../../actions/like_actions"
import { deletePost } from "../../../actions/post_actions"
import Post from "./post"



const mapStateToProps = (state) => {
    const currentUserId = state.session.id
    const posterId = state.entities.modal.posterId
    const postId = state.entities.modal.postId
    const poster = state.entities.users[posterId]
    const post = poster.posts[postId]
    let liked = false
    
    if (post){ liked = post.likers.includes(currentUserId) }

    return ({
        postId,
        poster,
        post,
        liked,
    })
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(removeModal()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    deletePost: (postId) => dispatch(deletePost(postId))
})

export default connect(mapStateToProps,mapDispatchToProps)(Post)