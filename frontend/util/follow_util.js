

export const createFollow = (follow) => (
    $.ajax({
        METHOD: "POST",
        URL: "api/follows",
        data: {follow}
    })
)

export const deleteFollow = (followingId) => (
    $.ajax({
        METHOD: "DELETE",
        URL: `api/follows/${followingId}`
    })
)