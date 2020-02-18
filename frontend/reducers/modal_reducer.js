
import { RECEIVE_MODAL, REMOVE_MODAL } from "../actions/comment_actions";

const modalReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_MODAL:
            return action.modal
        case REMOVE_MODAL:
            return {}
        default:
            return state
    }
}

export default modalReducer