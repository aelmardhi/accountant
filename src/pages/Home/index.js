import { useEffect,useState } from "react";
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
        <article>
            <h1>Accountant</h1>
            <AccountsList accounts={accounts}></AccountsList>
            <div>
                <h3>
                    <span>Total</span>
                    <span>{total}</span>
                </h3>
                <h3>aelmardhi © 2022</h3>
                <a href="/addAccount">New Account</a>
            </div>
        </article>
    );
}