
import * as FollowUtil from "../util/follow_util"

export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";


const receiveFollow = (follow) => ({
    type: CREATE_FOLLOW,
    follow
})

const removeFollow = (followingId) => ({
    type: DELETE_FOLLOW,
    followingId
})

export const createFollow = (follow) => (dispatch) => (
    FollowUtil.createFollow(follow).then( 
        (follow) => dispatch(receiveFollow(follow))
    )
)

export const deleteFollow = (followingId) => (dispatch) => (
    FollowUtil.deleteFollow(followingId).then( 
        ({ following_id }) => dispatch(removeFollow(following_id))    )
)