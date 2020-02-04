

 export const getImagesForUser = (state, userId) => {
    let user = state.entities.users[userId];
     return user && user.posts ? Object.values(user.posts) : []
}