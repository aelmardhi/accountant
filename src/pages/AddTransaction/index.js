import { useEffect , useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { addTransaction, getAccount } from "../../utils/db";


export default function AddTransaction(props){
    const navigate = useNavigate();
    const [transaction , setTransaction] = useState({
                                                    amount :0,
                                                    amountNegative: false, 
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
                <input name="amount" id="amount" type="number" min="0" value={Math.abs(transaction.amount)} onChange={(e)=>{
                    
                    setTransaction({amount: Math.abs(parseInt(e.target.value)), amountNegative:transaction.amountNegative, details: transaction.details});
                }}></input>
                <input name="amountNegative" className="amountNegative" id="amountNegative" type="checkbox" checked={transaction.amountNegative} onChange={(e)=>{
                    setTransaction({amount: transaction.amount, amountNegative:e.target.checked, details: transaction.details});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">Details</label>
                <textarea name="details" id="details" value={transaction.details} onChange={(e)=>{
                    setTransaction({details: e.target.value, amount: transaction.amount, amountNegative:transaction.amountNegative});
                }}></textarea>
            </fieldset>
            <button className="btn" onClick={(e)=>{
                transaction.date = Date();
                if (transaction.amountNegative)
                transaction.amount *= -1;
                addTransaction(parseInt(accountId), transaction).then(r=>{
                    navigate(-1);
                })
            }}>Add</button>
        </article>
    );
}