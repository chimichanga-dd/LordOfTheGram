import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from "../actions/session_actions"


const ErrorsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_ERRORS:
            return Object.assign({}, action.errors)
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return state
    }
}

export default ErrorsReducer