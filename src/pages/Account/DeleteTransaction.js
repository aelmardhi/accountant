import { Navigate , } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal"
import { removeTransaction } from "../../utils/db";


export default function DeleteTransaction (props){
    const [redirect ,setRedirect] = useState('');
    const [panelVisible ,setPanelVisible] = useState(false);
    function showPanel(e){
        setPanelVisible(true);
    }
    function hidePanel(e){
        setPanelVisible(false);
    }
    function onDelete(e){
        removeTransaction(props.accountId,props.transactionId).then((a)=>{
            props.refresh();
        })
    }

    return (
        <span>
            {redirect && <Navigate to={redirect}></Navigate>}
            <button onClick={showPanel}>Delete</button>
            {panelVisible && <Modal onCancel={hidePanel}>
                <div>
                    <h2>Are you shore to delete this Transaction?</h2>
                    <div>
                        <button onClick={hidePanel}>Canncel</button>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </div>
                </Modal>}
        </span>
    );
}