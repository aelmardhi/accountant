import { Navigate } from "react-router-dom";
import LocalizedStrings from 'react-localization';
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
    let strings = new LocalizedStrings({
        en:{
            delete: 'Delete',
            cancel: 'Cancel',
            areYouSure: 'Are you sure to delete this account?',
        },
        ar:{
            delete: 'حذف',
            cancel: 'الغاء',
            areYouSure: 'هل انت متأكد أنك تريد حذف الحساب؟',
        },
    });

    return (
        <span>
            {redirect && <Navigate to={redirect}></Navigate>}
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