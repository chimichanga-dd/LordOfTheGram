
import { RECEIVE_USERS, RESET_SEARCH} from "../actions/user_actions"

const SearchBarReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USERS:
            return Object.assign({}, action.users)
        case RESET_SEARCH:
            return {}
        default:
            return state
    }
}

export default SearchBarReducer