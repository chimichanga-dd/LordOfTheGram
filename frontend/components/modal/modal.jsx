
import React from "react"

export function Modal({modal, closeModal}){
    if(!modal.posterId){
        return null
    }

    return(
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <p>THIS MODAL WORKS</p>
            </div>
        </div>
    )
}