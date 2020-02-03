

export const createFollow = (follow) => (
    $.ajax({
        METHOD: "POST",
        URL: "api/follows",
        data: {follow}
    })
)

export const destroyFollow = (followId) => (
    $.ajax({
        METHOD: "DELETE",
        URL: `api/follows/${followId}`
    })
)