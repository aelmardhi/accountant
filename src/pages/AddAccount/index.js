import { useNavigate } from "react-router-dom";
import {addAccount} from "../../utils/db"
export default function AddAccount(props){
    const navigate = useNavigate();
    const account = {}
    return (
        <article className="column accountForm">
            <h1>New Account</h1>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={account.name} onChange={(e)=>{
                    account.name = e.target.value;
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="phone">Phone</label>
                <input name="phone" id="phone" type="phone" value={account.phone} onChange={(e)=>{
                    account.phone = e.target.value;
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">Details</label>
                <textarea name="details" id="details" value={account.details} onChange={(e)=>{
                    account.details = e.target.value;
                }}></textarea>
            </fieldset>
            <button className="btn" onClick={(e)=>{
                addAccount(account).then(r=>{
                    navigate('/account/'+r,{replace:true})
                })
            }}>Add</button>
        </article>
    );
}