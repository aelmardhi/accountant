import DeleteAccount from "./DeleteAccount";

export default function Panel(props){
    
    if(props.account){
        return (<div>
            <h3>{props.account.phone}</h3>
            <div className="row">
                <a href={"dial:"+props.account.phone}>call</a>
                <a href={"https://wa.me/"
                +(props.account.phone[0]=='+'?
                    props.account.phone:
                    '+249'+props.account.phone)
                }>Whatsapp</a>
                <DeleteAccount id={props.account.id}></DeleteAccount>
            </div>
        </div>)
    }
    return( <div></div>);
}