
export const getUser = (id) => (
    $.ajax({
        method: "GET",
        url: `api/users/${id}`
    })
)

export const editUser = (id) => (
    $.ajax({
        method: "PUT",
        url: `api/posts/${id}`
    })
)