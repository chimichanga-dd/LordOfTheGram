
import { combineReducers } from "redux";
import usersReducer from "./users_reducer"
import postReducer from "./post_reducer";
import searchReducer from "./search_reducer"
import followReducer from "./follow_reducer";
import modalReducer from "./modal_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    search: searchReducer,
    follow: followReducer,
    modal: modalReducer
})

export default entitiesReducer