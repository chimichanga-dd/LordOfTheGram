
import { RECEIVE_FOLLOW, RECEIVE_NOT_FOLLOWED} from "../actions/follow_actions"
import { LOGOUT_CURRENT_USER } from "../actions/session_actions"

const followReducer = (state = {}, action) => {
    Object.freeze(state)
    let new_state = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_NOT_FOLLOWED:
            return action.users
        case RECEIVE_FOLLOW:
            let followedId = action.follow.following_id
            let notFollowing = Object.values(new_state)
            for (let i = 0; i < notFollowing.length; i++){
                if (notFollowing[i].id == followedId){
                    delete new_state[notFollowing[i].username]
                    return new_state
                }
            }
            return new_state
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state
    }
}

export default followReducer