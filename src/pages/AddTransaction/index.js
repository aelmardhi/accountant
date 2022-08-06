import { useEffect , useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { addTransaction, getAccount } from "../../utils/db";


export default function AddTransaction(props){
    const navigate = useNavigate();
    const [transaction , setTransaction] = useState({
                                                    amount :0,
                                                    details: '',
                                                })
    const accountId = useParams().accountId
    const [account, setAccount] = useState({name:''});
    useEffect(()=>{
        getAccount(parseInt(accountId))
            .then(a => {
                setAccount(a)
            })
    });
    return(
        <article className="column transaction">
            <h1>New transaction</h1>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={account.name} disabled></input>
            </fieldset>
            <fieldset>
                <label htmlFor="amount">Amount</label>
                <input name="amount" id="amount" type="number" value={transaction.amount} onChange={(e)=>{
                    setTransaction({amount: parseInt(e.target.value), details: transaction.details});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">Details</label>
                <textarea name="details" id="details" value={transaction.details} onChange={(e)=>{
                    setTransaction({details: e.target.value, amount: transaction.amount});
                }}></textarea>
            </fieldset>
            <button className="btn" onClick={(e)=>{
                transaction.date = Date();
                addTransaction(parseInt(accountId), transaction).then(r=>{
                    navigate(-1);
                })
            }}>Add</button>
        </article>
    );
}