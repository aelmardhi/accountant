import { useState } from "react";
import { TrashIcon } from "../../components/Icons";
import Modal from "../../components/Modal"
import { removeTransaction } from "../../utils/db";


export default function DeleteTransaction (props){
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
            <button className="btn trash" onClick={showPanel}><TrashIcon/></button>
            {panelVisible && <Modal onCancel={hidePanel}>
                <div>
                    <h2>Are you shore to delete this Transaction?</h2>
                    <div>
                        <button className="btn" onClick={hidePanel}>Canncel</button>
                        <button className="btn trash" onClick={onDelete}>Delete</button>
                    </div>
                </div>
                </Modal>}
        </span>
    );
}