import { Link } from "react-router-dom";

export default function AccountsListItem (props){

    return (
        <li>
            <Link to={'/account/'+props.account.id}>
                <span>{props.account.name} </span>
                <span className={
                    props.account.total > 0? 'positive':
                    props.account.total < 0? 'negative':
                                                ''
                }>{props.account.total}</span>
            </Link>
        </li>
    );
}