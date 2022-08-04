export default function AccountsListItem (props){

    return (
        <li>
            <a href={'/account/'+props.account.id}>
                {props.account.name}
            </a>
        </li>
    );
}