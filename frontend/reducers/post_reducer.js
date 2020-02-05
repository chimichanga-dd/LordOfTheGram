import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions"
import { LOGOUT_CURRENT_USER } from "../actions/session_actions"

const postReducer = (state = {}, action) => {
    Object.freeze(state)
    let new_state = Object.assign({},state)

    switch(action.type){
        case RECEIVE_POST:
            return Object.assign(new_state, { [action.post.id]: action.post} )
        case RECEIVE_POSTS:
            return action.posts
        case REMOVE_POST:
            delete new_state[action.post.id]
            return Object.assign(new_state)
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state
    }
}

export default postReducer