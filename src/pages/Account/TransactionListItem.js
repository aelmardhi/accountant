import { PenIcon } from "../../components/Icons";
import DeleteTransaction from "./DeleteTransaction";
import { Link } from "react-router-dom";

export default function TransactionsListItem (props){
    return(
        <tr>
            <td className={
                props.transaction.amount > 0 ? 'positive':
                props.transaction.amount < 0 ? 'negative':
                                                ''
            }>{Math.abs(props.transaction.amount)}</td>
            <td>{new Date(props.transaction.date).toLocaleDateString()}</td>
            <td>{props.transaction.details}</td>
            <td><Link className="btn pen" to={"/account/"+props.accountId+"/editTransaction/"+props.transaction.id}><PenIcon/></Link></td>
            <td><DeleteTransaction refresh={props.refresh} accountId={props.accountId} transactionId={props.transaction.id}></DeleteTransaction></td>
        </tr>
    )
}