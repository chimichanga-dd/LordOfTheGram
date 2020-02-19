import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions"
import { LOGOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions"
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions"
import merge from 'lodash/merge';

const postReducer = (state = {}, action) => {
    Object.freeze(state)
       
    //use lodash merge for deep copy
    let next_state = merge({}, state)
    let post

    switch(action.type){
        case RECEIVE_POST:
            return next_state
        case RECEIVE_POSTS:
            return Object.assign(next_state, action.posts)
        case REMOVE_POST:
            delete next_state[action.post.id]
            return next_state
        case RECEIVE_LIKE:
            post = next_state[action.like.post_id]
            if (post && post.likers){
                post.likers.push(action.like.user_id)
            }
            return next_state
        case REMOVE_LIKE:
            post = next_state[action.like.post_id]
            if (post && post.likers){
                post.likers = post.likers.filter((id) => id != action.like.user_id)
            }
            return next_state
        case RECEIVE_COMMENT:
            post = next_state[action.comment.post_id]
            if (post && post.comments){
                post.comments[action.comment.id] = action.comment
            } else if (post) {
                post.comments = {}
                post.comments[action.comment.id] = action.comment
            }
            return next_state
        case REMOVE_COMMENT:
            post = next_state[action.comment.post_id]
            if(post){
                delete post.comments[action.comment.id]
                return next_state
            } else {
                return next_state
            }
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state
    }
}

export default postReducer