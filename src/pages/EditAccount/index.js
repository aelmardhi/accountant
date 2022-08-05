import { useEffect,useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getAccount, updateAccount} from "../../utils/db"
export default function EditAccount(props){
    const [redirect ,setRedirect] = useState('');
    const [account,setAccount] = useState({name:'',phone:'',details:''});
    const id = parseInt(useParams().id);
    useEffect(()=>{
        getAccount(id)
            .then(a => {
                setAccount(a)
            })
    },[]);
    return (
        <article>
            {redirect && <Navigate to={redirect}></Navigate>}
            <h1>Edit Account</h1>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={account.name} onChange={(e)=>{
                    setAccount({...account, name : e.target.value});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="phone">Phone</label>
                <input name="phone" id="phone" type="phone" value={account.phone} onChange={(e)=>{
                    setAccount({...account, phone : e.target.value});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">Details</label>
                <textarea name="details" id="details" value={account.details} onChange={(e)=>{
                    setAccount({...account, details : e.target.value});
                }}></textarea>
            </fieldset>
            <button onClick={(e)=>{
                updateAccount(id,account.name,account.phone,account.details).then(r=>{
                    setRedirect('/account/'+r)
                })
            }}>Update</button>
        </article>
    );
}