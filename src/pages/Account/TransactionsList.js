import TransactionsListItem from "./TransactionListItem";
import LocalizedStrings from 'react-localization';

export default function TransactionsList(props){
    let strings = new LocalizedStrings({
        en:{
            amount: 'Amount',
            date: 'Date',
            details: 'Details',
        },
        ar:{
            amount: 'الصافي',
            date: 'التاريخ',
            details: 'التفاصيل',
        },
    });
    return(
        <table>
            <thead>
                <tr>
                    <th>{strings.amount}</th>
                    <th>{strings.date}</th>
                    <th>{strings.details}</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((t,i)=>(<TransactionsListItem key={i} refresh={props.refresh} accountId={props.accountId} transaction={t}></TransactionsListItem>))}
            </tbody>
        </table>
    );
}