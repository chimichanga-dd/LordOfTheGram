
import { RECEIVE_USER } from "../actions/user_actions"
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"

const UsersReducer = (state =  {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user})
        case LOGOUT_CURRENT_USER:
            return Object.assign({})
        default:
            return state
    }
}

export default UsersReducer