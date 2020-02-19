
import React from "react";
import PostContainer from "../post/post/post_container"

export function Modal({modal, closeModal}){
    if(!modal.posterId){
        return null
    }

    return(
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <PostContainer />
            </div>
        </div>
    )
}