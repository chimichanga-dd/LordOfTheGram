
import * as CommentUtil from "../util/comments_util"

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment
})

export const createComment = (comment) => (dispatch) => (
    CommentUtil.createComment(comment).then( (comment) => dispatch(receiveComment(comment)) )
)

export const deleteComment = (commentId) => (dispatch) => (
    CommentUtil.deleteComment(commentId).then( (comment) => dispatch(removeComment(comment)) )
)
