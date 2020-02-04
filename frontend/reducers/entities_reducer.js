
import { combineReducers } from "redux";
import usersReducer from "./users_reducer"
import postReducer from "./post_reducer";
import searchReducer from "./search_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    search: searchReducer
})

export default entitiesReducer