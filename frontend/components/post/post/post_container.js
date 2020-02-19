import { connect } from "react-redux"
import { removeModal } from "../../../actions/modal_actions"
import Post from "./post"



const mapStateToProps = (state) => {
    const currentUserId = state.session.id
    const currentUser = state.entities.users[currentUserId]
    const posterId = state.entities.modal.posterId
    const postId = state.entities.modal.postId
    const poster = state.entities.users[posterId]
    const post = poster.posts[postId]

    return ({
        currentUserId,
        currentUser,
        posterId,
        postId,
        poster,
        post,
    })
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(removeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(Post)