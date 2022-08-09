import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { getAccountAll } from "../../utils/db"; 
import LocalizedStrings from 'react-localization';

import AccountsList from "./AccountsList";

export default function Home(props){
    const [total ,setTotal] = useState(0);
    const [accounts, setAccounts] = useState([])
    useEffect(()=>{
        getAccountAll()
            .then(a => {
                const t = a.reduce((acc,a)=>{
                    a.total = a.transactions.reduce((acc,t)=>{
                        return acc + t.amount
                    },0)
                    return acc+= a.total;
                },0)
                setTotal(t);
                setAccounts(a)
            })
    },[])
    let strings = new LocalizedStrings({
        en:{
            accountant: 'Accountant',
            newAccount: 'New Account',
            total: 'Total',
        },
        ar:{
            accountant: 'المحاسب',
            newAccount: 'حساب جديد',
            total: 'الصافي',
        },
    });

    return (
        <article className="home column">
            <h1>{strings.accountant}</h1>
            <AccountsList accounts={accounts}></AccountsList>
            
                <h3 className="row total">
                    <span>{strings.total}</span>
                    <span className="amount">{total}</span>
                </h3>
                <Link className="btn" to="/addAccount">{strings.newAccount}</Link>
            
        </article>
    );
}