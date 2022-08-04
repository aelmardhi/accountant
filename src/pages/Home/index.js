import { useEffect,useState } from "react";
import { getAccountAll } from "../../utils/db"; 

import AccountsList from "./AccountsList";

export default function Home(props){
    const [accounts, setAccounts] = useState([])
    useEffect(()=>{
        getAccountAll()
            .then(a => {
                setAccounts(a)
            })
    },[])

    return (
        <article>
            <h1>Accountant</h1>
            <AccountsList accounts={accounts}></AccountsList>
        </article>
    );
}