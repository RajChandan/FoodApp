import classes from "./Modal.module.css";


const BackDrop = (props) =>
{
    return <div className={classes.backdrop} />
}



const ModalOverlay = (props) =>
{
    return <div className={classes.modal}>
        <div className={classes.children}>{props.children}</div>
    </div>
}



const Modal = (props) =>
{
    return 
}

export default Modal;