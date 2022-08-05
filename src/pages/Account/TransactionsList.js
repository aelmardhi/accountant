import TransactionsListItem from "./TransactionListItem";

export default function TransactionsList(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>amount</th>
                    <th>Date</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((t,i)=>(<TransactionsListItem key={i} refresh={props.refresh} accountId={props.accountId} transaction={t}></TransactionsListItem>))}
            </tbody>
        </table>
    );
}