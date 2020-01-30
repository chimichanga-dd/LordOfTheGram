
import * as PostUtil from "../util/post_util"

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";


const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

const receivePosts = (posts) => ({
    type: RECEIVE_POST,
    posts
})

const removePost = (post) => ({
    type: REMOVE_POST,
    post
})


export const fetchPost = (postId) => (dispatch) => (
    PostUtil.getPost(postId).then( (post) => dispatch(receivePost(post)) )
)

export const fetchPosts = () => (dispatch) => (
    PostUtil.getPosts().then( (posts) => dispatch(receivePosts(posts)) )
)

export const deletePost = () => (dispatch) => (
    PostUtil.deletePost(postId).then( (post) => dispatch(removePost(post)) )
)
