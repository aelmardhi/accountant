import AccountsListItem from "./AccountListItem"

export default function AccountsList(props){
    return (
        <ul>
            {props.accounts.map((a,i)=>
                    <AccountsListItem key={i} account={a}></AccountsListItem>
                )}
        </ul>
    );
}