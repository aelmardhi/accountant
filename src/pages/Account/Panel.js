import { PenIcon, PhoneIcon, WhatsappIcon } from "../../components/Icons";
import DeleteAccount from "./DeleteAccount";

export default function Panel(props){
    
    if(props.account){
        return (<div className="panel">
            <h3>{props.account.phone}</h3>
            <p>{props.account.details}</p>
            <div className="row">
                <a className="btn phone" href={"tel:"+props.account.phone}><PhoneIcon/></a>
                <a className="btn whatsapp" href={"https://wa.me/"
                +(props.account.phone[0]==='+'?
                    props.account.phone:
                    '+249'+props.account.phone)
                }><WhatsappIcon/></a>
                <a className="btn pen" href={"/account/"+props.account.id+"/edit"}><PenIcon></PenIcon></a>
                <DeleteAccount id={props.account.id}></DeleteAccount>
            </div>
        </div>)
    }
    return( <div></div>);
}