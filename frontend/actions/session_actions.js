
import * as SessionUtil from "../util/session_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"


const receiveCurrentUser = (user) => ({
    type: "RECEIVE_CURRENT_USER",
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const signUp = (user) => (dispatch) => (
    SessionUtil.signUp(user).then( 
        (user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const signIn = (user) => (dispatch) => (
    SessionUtil.signIn(user).then( 
        (user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const signOut = () => (dispatch) => (
    SessionUtil.signOut().then( () => dispatch(logoutCurrentUser()))
)