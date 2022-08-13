import { useNavigate } from "react-router-dom";
import LocalizedStrings from 'react-localization';
import {addAccount} from "../../utils/db"
import ImportContact from "./ImportContact";
import { useState } from "react";
export default function AddAccount(props){
    const navigate = useNavigate();
    const [account,setAccount] = useState({});
    function handleImportContact(contact){
        setAccount({name:contact.name,phone:contact.tel,details:account.details});
        account.name = contact.name;
        account.phone = contact.tel;
    }
    let strings = new LocalizedStrings({
        en:{
            newAccount: 'New Account',
            name: 'Name',
            phone: 'Phone',
            details: 'Details',
            add: 'Add',
        },
        ar:{
            newAccount: 'حساب جديد',
            name: 'الاسم',
            phone: 'الهاتف',
            details: 'التفاصيل',
            add: 'اضافة',
        },
    });
    return (
        <article className="column accountForm">
            <h1>{strings.newAccount}</h1>
            <fieldset>
                <label htmlFor="name">{strings.name}</label>
                <input name="name" id="name" value={account.name} onChange={(e)=>{
                    account.name = e.target.value;
                    setAccount(account);
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="phone">{strings.phone}</label>
                <input name="phone" id="phone" type="phone" value={account.phone} onChange={(e)=>{
                    account.phone = e.target.value;
                    setAccount(account);
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">{strings.details}</label>
                <textarea name="details" id="details" value={account.details} onChange={(e)=>{
                    account.details = e.target.value;
                    setAccount(account);
                }}></textarea>
            </fieldset>
            <ImportContact handleResults={handleImportContact}></ImportContact>
            <button className="btn" onClick={(e)=>{
                addAccount(account).then(r=>{
                    navigate('/account/'+r,{replace:true})
                })
            }}>{strings.add}</button>
        </article>
    );
}