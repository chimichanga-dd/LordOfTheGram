

export const RECEIVE_MODAL = "RECEIVE_MODAL"
export const REMOVE_MODAL = "REMOVE_MODAL"

export const receiveModal = (modal) => ({
    type: RECEIVE_MODAL,
    modal
})

export const removeModal = () => ({
    type: REMOVE_MODAL
})

