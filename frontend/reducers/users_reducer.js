
import { RECEIVE_USER } from "../actions/user_actions"
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions"

const UsersReducer = (state =  {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign(nextState, {[action.user.id]: action.user})
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user})
        case LOGOUT_CURRENT_USER:
            return Object.assign({})

        case RECEIVE_FOLLOW:
            let current_user = nextState[action.follow.user_id]
            let follow_target = nextState[action.follow.following_id]
            current_user.following.push(action.follow.following_id)
            follow_target.followers.push(action.follow.user_id)
            return nextState
        case REMOVE_FOLLOW:
            let current_user = nextState[action.follow.user_id]
            let follow_target = nextState[action.follow.following_id]
            current_user.following = current_user.following.filter(id => id !== action.follow.following_id)
            follow_target.followers = follow_target.followers.filter(id => id !== action.follow.user_id)
            return nextState
            
        default:
            return state
    }
}

export default UsersReducer