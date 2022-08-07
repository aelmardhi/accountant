import { Navigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal"
import { removeAccount } from "../../utils/db";
import { TrashIcon } from "../../components/Icons";


export default function DeleteAccount (props){
    const [redirect ,setRedirect] = useState('');
    const [panelVisible ,setPanelVisible] = useState(false);
    function showPanel(e){
        setPanelVisible(true);
    }
    function hidePanel(e){
        setPanelVisible(false);
    }
    function onDelete(e){
        removeAccount(props.id).then((a)=>{
            setRedirect('/');
        })
    }

    return (
        <span>
            {redirect && <Navigate to={redirect}></Navigate>}
            <button className="btn trash" onClick={showPanel}><TrashIcon/></button>
            {panelVisible && <Modal onCancel={hidePanel}>
                <div>
                    <h2>Are you sure to delete this account?</h2>
                    <div>
                        <button className="btn" onClick={hidePanel}>Canncel</button>
                        <button className="btn trash" onClick={onDelete}>Delete</button>
                    </div>
                </div>
                </Modal>}
        </span>
    );
}