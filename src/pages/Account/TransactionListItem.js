import DeleteTransaction from "./DeleteTransaction";

export default function TransactionsListItem (props){
    return(
        <tr>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.date}</td>
            <td>{props.transaction.details}</td>
            <td><a href={"/account/"+props.accountId+"/editTransaction/"+props.transaction.id}>Edit</a></td>
            <td><DeleteTransaction refresh={props.refresh} accountId={props.accountId} transactionId={props.transaction.id}></DeleteTransaction></td>
        </tr>
    )
}