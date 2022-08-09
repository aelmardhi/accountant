import { useEffect,useState } from "react";
import {useParams, Link} from 'react-router-dom';
import { getAccount } from "../../utils/db";
import LocalizedStrings from 'react-localization';

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
    let strings = new LocalizedStrings({
        en:{
            newTransaction: 'New Transaction',
            total: 'total',
        },
        ar:{
            newTransaction: 'معاملة جديدة',
            total: 'الصافي',
        },
    });
    if(account?.name)
        return(
            <article className="column account">
                    <h1>{account.name}</h1>
                    <Panel account={account}></Panel>
                    <div className="table">
                        <TransactionsList refresh={refresh} accountId={id} transactions={account.transactions}></TransactionsList>
                    </div>
                    
                    <h3 className="row total">
                        <span>{strings.total}</span>
                        <span className={'amount '+(account.total > 0 ? 'positive':
                                                account.total < 0 ? 'negative':
                                                '')}>
                                                    {Math.abs(account.total)}</span>
                    </h3>
                    <Link className="btn" to={"/account/"+id+"/addTransaction"}>{strings.newTransaction}</Link>
            </article>
        );
    return(<article className="column account"></article>)
}