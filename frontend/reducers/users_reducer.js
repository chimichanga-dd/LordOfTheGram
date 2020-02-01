
import { RECEIVE_USER, RECEIVE_CURRENT_USER} from "../actions/user_actions"

const UsersReducer = (state =  {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {[action.user.id]: action.user})
        default:
            return state
    }
}

export default UsersReducer