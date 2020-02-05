
export const getUser = (id) => (
    $.ajax({
        method: "GET",
        url: `api/users/${id}`
    })
)

export const getUsers = (userFilter) => (
    $.ajax({
        method: "GET",
        url: "api/users",
        data: {userFilter}
    })
)

export const editUser = (id) => (
    $.ajax({
        method: "PUT",
        url: `api/posts/${id}`
    })
)