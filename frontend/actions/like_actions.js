
import * as LikeUtil from "../util/likes_util"

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"


const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like
})

export const createLike = (like) => (dispatch) => {
    LikeUtil.createLike(like).then( (like) => dispatch(receiveLike(like)))
}

export const deleteLike = (like) => (dispatch) => {
    LikeUtil.deleteLike(like).then((like) => dispatch(removeLike(like)))
}

