import { connect } from "react-redux"
import Post from "./post"



const mapStateToProps = (state) => {
    const currentUserId = state.session.id
    const posterId = state.entities.modal.posterId
    const postId = state.entities.modal.postId
    const poster = state.entities.users[posterId]
    const post = poster.posts[postId]

    return ({
        currentUserId,
        posterId,
        postId,
        poster,
        post,
    })
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Post)