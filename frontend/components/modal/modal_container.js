import { removeModal } from "../../actions/modal_actions"
import { connect } from "react-redux"


const mapStateToProps = (state) => ({
    modal: state.entities.modal
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(removeModal)
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal)