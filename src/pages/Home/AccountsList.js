import AccountsListItem from "./AccountListItem"

export default function AccountsList(props){
    return (
        <ul>
            {props.accounts.map(a=>
                    <AccountsListItem account={a}></AccountsListItem>
                )}
        </ul>
    );
}