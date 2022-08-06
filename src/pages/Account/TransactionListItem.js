import { PenIcon } from "../../components/Icons";
import DeleteTransaction from "./DeleteTransaction";

export default function TransactionsListItem (props){
    return(
        <tr>
            <td className={
                props.transaction.amount > 0 ? 'positive':
                props.transaction.amount < 0 ? 'negative':
                                                ''
            }>{props.transaction.amount}</td>
            <td>{new Date(props.transaction.date).toLocaleDateString()}</td>
            <td>{props.transaction.details}</td>
            <td><a className="btn pen" href={"/account/"+props.accountId+"/editTransaction/"+props.transaction.id}><PenIcon/></a></td>
            <td><DeleteTransaction refresh={props.refresh} accountId={props.accountId} transactionId={props.transaction.id}></DeleteTransaction></td>
        </tr>
    )
}