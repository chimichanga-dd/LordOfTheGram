import RECEIVE_ERRORS from "../actions/session_actions"

const ErrorsReducer = (state = {}, action) => {
    switch(actions.type){
        case RECEIVE_ERRORS:
            return Object.assign({}, state, action.errors)
        default:
            return state
    }
}

export default ErrorsReducer