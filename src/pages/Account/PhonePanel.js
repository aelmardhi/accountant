export default function PhonePanel(props){
    console.log(props.phone)
    if(props.phone){
        return (<div>
            <h3>{props.phone}</h3>
            <div className="row">
                <a href={"dial:"+props.phone}>call</a>
                <a href={"https://wa.me/"
                +(props.phone[0]=='+'?
                    props.phone:
                    '+249'+props.phone)
                }>Whatsapp</a>
            </div>
        </div>)
    }
    return( <div></div>);
}