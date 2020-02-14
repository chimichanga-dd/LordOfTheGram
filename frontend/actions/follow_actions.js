
import * as FollowUtil from "../util/follow_util"

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_NOT_FOLLOWED = "RECEIVE_NOT_FOLLOWED"

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
})

const removeFollow = (follow) => ({
    type: REMOVE_FOLLOW,
    follow
})

const receiveNotFollowed = (users) => ({
    type: RECEIVE_NOT_FOLLOWED,
    users
})

export const createFollow = (follow) => (dispatch) => (
    FollowUtil.createFollow(follow).then( 
        (follow) => dispatch(receiveFollow(follow))
    )
)

export const deleteFollow = (followingId) => (dispatch) => (
    FollowUtil.deleteFollow(followingId).then( 
        (follow) => dispatch(removeFollow(follow))
    )
)

export const getNotFollowed = () => (dispatch) => (
    FollowUtil.getPeople().then(
        (users) => dispatch(receiveNotFollowed(users))
    )
)