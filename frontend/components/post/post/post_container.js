import { connect } from "react-redux"
import { removeModal } from "../../../actions/modal_actions"
import { createLike, deleteLike } from "../../../actions/like_actions"
import Post from "./post"



const mapStateToProps = (state) => {
    const currentUserId = state.session.id
    const currentUser = state.entities.users[currentUserId]
    const posterId = state.entities.modal.posterId
    const postId = state.entities.modal.postId
    const poster = state.entities.users[posterId]
    const post = poster.posts[postId]
    const liked = post.likers.includes(currentUserId)

    return ({
        currentUserId,
        currentUser,
        posterId,
        postId,
        poster,
        post,
        liked,
    })
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(removeModal()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (postId) => dispatch(deleteLike(postId))
})

export default connect(mapStateToProps,mapDispatchToProps)(Post)