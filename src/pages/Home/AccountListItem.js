export default function AccountsListItem (props){

    return (
        <li>
            <a href={'/account/'+props.account.id}>
                <span>{props.account.name} </span>
                <span>{props.account.total}</span>
            </a>
        </li>
    );
}