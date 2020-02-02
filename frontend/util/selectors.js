

 export const getImagesForUser = (state, userId) => {
    let user = state.entities.users[userId];
    console.log(user)
    return user ? Object.values(user.posts) : []
}