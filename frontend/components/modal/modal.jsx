
import React from "react"

export function Modal(){
    if(!this.props.modal){
        return null
    }

    return(
        <div className="modal-background" onClick={() => this.props.closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <p>THIS MODAL WORKS</p>
            </div>
        </div>
    )
}