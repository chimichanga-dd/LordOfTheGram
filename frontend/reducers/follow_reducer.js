
import {RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_NOT_FOLLOWED} from "../actions/follow_actions"

const followReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_NOT_FOLLOWED:
            return action.users
        default:
            return state
    }
}

export default followReducer