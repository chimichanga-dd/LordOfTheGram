
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

export const editUser = (user) => (
    $.ajax({
        method: "PUT",
        url: `api/posts/${user.id}`,
        data: user,
        contentType: false,
        processData: false
    })
)