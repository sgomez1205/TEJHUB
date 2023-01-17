import './Modal.css'

function Modal({children}){
    return <div className="container-modal">
        <div className="modal-body">
            {children}
            
        </div>
    </div>
}

export default Modal;