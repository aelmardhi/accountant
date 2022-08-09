import { useEffect , useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import LocalizedStrings from 'react-localization';
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
    let strings = new LocalizedStrings({
        en:{
            addTransaction: 'Add Transaction',
            name: 'Name',
            amount: 'Amount',
            credit: 'Credit',
            debt: 'Debt',
            details: 'Details',
            add: 'Add',
        },
        ar:{
            addTransaction: 'معاملة جديدة',
            name: 'الاسم',
            amount: 'المبلغ',
            credit: 'له',
            debt: 'عليه',
            details: 'التفاصيل',
            add: 'اضافة',
        },
    });
    return(
        <article className="column transaction">
            <h1>{strings.addTransaction}</h1>
            <fieldset>
                <label htmlFor="name">{strings.name}</label>
                <input name="name" id="name" value={account.name} disabled></input>
            </fieldset>
            <fieldset>
                <label htmlFor="amount">{strings.amount}</label>
                <input name="amount" id="amount" type="number" min="0" value={Math.abs(transaction.amount)} onChange={(e)=>{
                    
                    setTransaction({amount: Math.abs(parseInt(e.target.value)), amountNegative:transaction.amountNegative, details: transaction.details});
                }}></input>
                <input name="amountNegative" className="amountNegative" id="amountNegative" type="checkbox" data-credit={strings.credit} data-debt={strings.debt} checked={transaction.amountNegative} onChange={(e)=>{
                    setTransaction({amount: transaction.amount, amountNegative:e.target.checked, details: transaction.details});
                }}></input>
            </fieldset>
            <fieldset>
                <label htmlFor="details">{strings.details}</label>
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
            }}>{strings.add}</button>
        </article>
    );
}