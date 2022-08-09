import { useEffect,useState } from "react";
import {useParams, Link} from 'react-router-dom';
import { getAccount } from "../../utils/db";

import Panel from "./Panel";
import TransactionsList from "./TransactionsList";

export default function Account(props){
    const [account,setAccount] = useState({});
    const id = parseInt(useParams().id)
    useEffect(()=>{
        refresh();
    });
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
    if(account?.name)
        return(
            <article className="column account">
                    <h1>{account.name}</h1>
                    <Panel account={account}></Panel>
                    <div className="table">
                        <TransactionsList refresh={refresh} accountId={id} transactions={account.transactions}></TransactionsList>
                    </div>
                    
                    <h3 className="row total">
                        <span>Total</span>
                        <span className="amount">{account.total}</span>
                    </h3>
                    <Link className="btn" to={"/account/"+id+"/addTransaction"}>New Transaction</Link>
            </article>
        );
    return(<article className="column account"></article>)
}