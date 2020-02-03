

 export const getImagesForUser = (state, userId) => {
    let user = state.entities.users[userId];
    return user ? Object.values(user.posts) : []
}