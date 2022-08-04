import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';
import { getAccount } from "../../utils/db";

import PhonePanel from "./PhonePanel";
import TransactionsList from "./TransactionsList";

export default function Account(props){
    const [account,setAccount] = useState({});
    const id = useParams().id
    useEffect(()=>{
        getAccount(parseInt(id))
            .then(a => {
                a.total = a.transactions.reduce((acc,t)=>{
                    return acc += t.amount
                },0)
                setAccount(a)
            })
    },[]);

    return(
        <article>
            {account?.name && <div>
                <h1>{account.name}</h1>
                <PhonePanel phone={account.phone}></PhonePanel>
                <TransactionsList transactions={account.transactions}></TransactionsList>
                <div className="row">
                    <h3>total</h3>
                    <h3>{account.total}</h3>
                </div>
            </div>}
        </article>
    );
}