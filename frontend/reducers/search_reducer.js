
import { RECEIVE_USERS } from "../actions/user_actions"

const SearchBarReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USERS:
            return Object.assign({}, action.users)
        default:
            return state
    }
}

export default SearchBarReducer