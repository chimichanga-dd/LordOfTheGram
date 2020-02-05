import * as UserUtil from "../util/user_util"

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RESET_SEARCH = "RESET_SEARCH";


const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveUsers = (users) =>({
    type: RECEIVE_USERS,
    users
})

const resetSearch = () => ({
    type: RESET_SEARCH
})

export const fetchUser = (userId) => (dispatch) => (
    UserUtil.getUser(userId).then( (user) => dispatch(receiveUser(user)))
)

export const fetchUsers = (userFilter) => (dispatch) => (
    UserUtil.getUsers(userFilter).then( (users) => dispatch(receiveUsers(users)))
)

export const clearSearch = () => (dispatch) => (
    dispatch(resetSearch())
)