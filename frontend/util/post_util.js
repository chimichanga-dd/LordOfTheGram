
export const getPost = (id) => (
    $.ajax({
        method: "GET",
        url: `api/posts/${id}`
    })
)

export const getPosts = (offset) => (
    $.ajax({
        method: "GET",
        url: `api/posts`,
        data: {offset}
    })
)

export const createPost = (post) => (
    $.ajax({
        method:"POST",
        url: "api/posts",
        data: post,
        contentType: false,
        processData: false
    })
)

export const deletePost = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/posts/${id}`
    })
)