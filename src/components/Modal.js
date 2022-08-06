import './Modal.css'
export default function Modal(props){
    function onClick(e){
        props.onCancel();
    }
    return(<div className="modal" onClick={onClick} >
        <div>
        {props.children}
        </div>
    </div>);
} 