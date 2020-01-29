
import { RECEIVE_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"

_nullUser = {
    id: null
}


const SessionReducer = (state = _nullUser, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_USER:
            return Object.assign({}, state, { id: action.user.id} )
        case LOGOUT_CURRENT_USER:
            return Object.assign(_nullUser)
        default:
            return state
    }
}

export default SessionReducer