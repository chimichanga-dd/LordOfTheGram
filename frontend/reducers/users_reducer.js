
import { RECEIVE_USER } from "../actions/user_actions"
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions"
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions"
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions"

import merge from 'lodash/merge';

const UsersReducer = (state =  {}, action) => {
    Object.freeze(state)
    //use lodash merge for deep copy
    let next_state = merge({}, state)

    let current_user, follow_target,receiver
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign(next_state, {[action.user.id]: action.user})
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user})
        case LOGOUT_CURRENT_USER:
            return Object.assign({})
        case RECEIVE_FOLLOW:
            current_user = action.follow.user_id
            follow_target = action.follow.following_id
            next_state[current_user].following.push(action.follow.following_id)
            next_state[follow_target].followers.push(action.follow.user_id)
            return next_state
        case REMOVE_FOLLOW:
            current_user = next_state[action.follow.user_id]
            follow_target = next_state[action.follow.following_id]
            current_user.following = current_user.following.filter(id => id !== action.follow.following_id)
            follow_target.followers = follow_target.followers.filter(id => id !== action.follow.user_id)
            return next_state
        case RECEIVE_LIKE:
            receiver = next_state[action.like.receiver]
            if (receiver) {
                receiver.posts[action.like.post_id].likers.push(action.like.user_id)
            }
            return next_state
        case REMOVE_LIKE:
            receiver = next_state[action.like.receiver]
            if (receiver) {
                receiver.posts[action.like.post_id].likers = receiver.posts[action.like.post_id].likers.filter((id) => id != action.like.user_id)
            }
            return next_state
        case RECEIVE_COMMENT:
            receiver = next_state[action.comment.receiver]
            if (receiver){
                receiver.posts[action.comment.post_id].comments[action.comment.id] = action.comment
            }
            return next_state
        case REMOVE_COMMENT:
            receiver = next_state[action.comment.receiver]
            if (receiver) {
                delete receiver.posts[action.comment.post_id].comments[action.comment.id]
            }
            return next_state
        default:
            return state
    }
}

export default UsersReducer