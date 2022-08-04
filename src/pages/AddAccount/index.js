import { useState } from "react";
import { Navigate } from "react-router-dom";
import {addAccount} from "../../utils/db"
export default function AddAccount(props){
    const [redirect ,setRedirect] = useState('');
    const account = {}
    return (
        <article>
            {redirect.length && <Navigate to={redirect}></Navigate>}
            <h1>Add Account</h1>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value="" onChange={(e)=>{
                    account.name = e.target.value;
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="phone">Phone</label>
                <input name="phone" id="phone" type="phone" value="" onChange={(e)=>{
                    account.phone = e.target.value;
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">Details</label>
                <textarea name="details" id="details" value="" onChange={(e)=>{
                    account.details = e.target.value;
                }}></textarea>
            </fieldset>
            <button onClick={(e)=>{
                addAccount(account).then(r=>{
                    setRedirect('/account/'+r)
                })
            }}>Add</button>
        </article>
    );
}