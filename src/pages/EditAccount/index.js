import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LocalizedStrings from 'react-localization';
import { getAccount, updateAccount} from "../../utils/db"
export default function EditAccount(props){
    const navigate = useNavigate();
    const [account,setAccount] = useState({name:'',phone:'',details:''});
    const id = parseInt(useParams().id);
    useEffect(()=>{
        getAccount(id)
            .then(a => {
                setAccount(a)
            })
    },[id]);
    let strings = new LocalizedStrings({
        en:{
            editAccount: 'Edit Account',
            name: 'Name',
            phone: 'Phone',
            details: 'Details',
            update: 'Update',
        },
        ar:{
            editAccount: 'تعديل حساب',
            name: 'الاسم',
            phone: 'الهاتف',
            details: 'التفاصيل',
            update: 'تعديل',
        },
    });
    return (
        <article className="column accountForm">
            <h1>{strings.editAccount}</h1>
            <fieldset>
                <label htmlFor="name">{strings.name}</label>
                <input name="name" id="name" value={account.name} onChange={(e)=>{
                    setAccount({...account, name : e.target.value});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="phone">{strings.phone}</label>
                <input name="phone" id="phone" type="phone" value={account.phone} onChange={(e)=>{
                    setAccount({...account, phone : e.target.value});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">{strings.details}</label>
                <textarea name="details" id="details" value={account.details} onChange={(e)=>{
                    setAccount({...account, details : e.target.value});
                }}></textarea>
            </fieldset>
            <button className="btn" onClick={(e)=>{
                updateAccount(id,account.name,account.phone,account.details).then(r=>{
                    navigate(-1);
                })
            }}>{strings.update}</button>
        </article>
    );
}