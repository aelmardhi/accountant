import { useEffect , useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getAccount, getTransaction, updateTransaction } from "../../utils/db";


export default function EditTransaction(props){
    const navigate = useNavigate()
    const [transaction , setTransaction] = useState({
                                                    amount :0,
                                                    details: '',
                                                })
    const accountId = parseInt(useParams().accountId)
    const transactionId = parseInt(useParams().transactionId)
    const [account, setAccount] = useState({name:''});
    useEffect(()=>{
        getAccount(accountId)
            .then(a => {
                setAccount(a)
            })
        getTransaction(accountId,transactionId)
            .then(t=>{
                setTransaction(t);
            })
    },[accountId,transactionId]);
    return(
        <article>
            <h1>Edit transaction</h1>
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
            <button onClick={(e)=>{
                // transaction.date = Date();
                updateTransaction(accountId, transactionId,transaction.amount,transaction.date, transaction.details).then(r=>{
                    navigate(-1)
                })
            }}>Update</button>
        </article>
    );
}