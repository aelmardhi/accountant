export default function TransactionsListItem (props){
    return(
        <tr>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.date}</td>
            <td>{props.transaction.details}</td>
        </tr>
    )
}