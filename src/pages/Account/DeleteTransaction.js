import { useState } from "react";
import LocalizedStrings from 'react-localization';
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

    let strings = new LocalizedStrings({
        en:{
            delete: 'Delete',
            cancel: 'Cancel',
            areYouSure: 'Are you sure to delete this Transaction?',
        },
        ar:{
            delete: 'حذف',
            cancel: 'الغاء',
            areYouSure: 'هل انت متأكد أنك تريد حذف المعاملة؟',
        },
    });
    return (
        <span>
            <button className="btn trash" onClick={showPanel}><TrashIcon/></button>
            {panelVisible && <Modal onCancel={hidePanel}>
                <div>
                    <h2>{strings.areYouSure}</h2>
                    <div>
                        <button className="btn" onClick={hidePanel}>{strings.cancel}</button>
                        <button className="btn trash" onClick={onDelete}>{strings.delete}</button>
                    </div>
                </div>
                </Modal>}
        </span>
    );
}