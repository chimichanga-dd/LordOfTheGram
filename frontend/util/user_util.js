
export const getUser = (id) => (
    $.ajax({
        method: "GET",
        url: `api/users/${id}`
    })
)

export const getUsers = () => (
    $.ajax({
        method: "GET",
        url: "api/users"
    })
)

export const editUser = (id) => (
    $.ajax({
        method: "PUT",
        url: `api/posts/${id}`
    })
)