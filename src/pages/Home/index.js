import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { getAccountAll } from "../../utils/db"; 

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

    return (
        <article className="home column">
            <h1>Accountant</h1>
            <AccountsList accounts={accounts}></AccountsList>
            
                <h3 className="row total">
                    <span>Total</span>
                    <span className="amount">{total}</span>
                </h3>
                <Link className="btn" to="/addAccount">New Account</Link>
            
        </article>
    );
}