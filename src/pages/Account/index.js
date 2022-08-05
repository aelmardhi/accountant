import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';
import { getAccount } from "../../utils/db";

import Panel from "./Panel";
import TransactionsList from "./TransactionsList";

export default function Account(props){
    const [account,setAccount] = useState({});
    const id = parseInt(useParams().id)
    useEffect(()=>{
        refresh();
    },[]);
    function refresh(){
        getAccount(id)
            .then(a => {
                a.id = id
                a.total = a.transactions.reduce((acc,t)=>{
                    return acc += t.amount
                },0)
                setAccount(a)
            })
    }

    return(
        <article>
            {account?.name && <div>
                <h1>{account.name}</h1>
                <Panel account={account}></Panel>
                <TransactionsList refresh={refresh} accountId={id} transactions={account.transactions}></TransactionsList>
                <div className="row">
                    <h3>total</h3>
                    <h3>{account.total}</h3>
                </div>
                <div>
                <h3>
                    <span>Total</span>
                    <span>{account.total}</span>
                </h3>
                <h3>aelmardhi © 2022</h3>
                <a href={"/account/"+id+"/addTransaction"}>New Account</a>
            </div>
            </div>}
        </article>
    );
}