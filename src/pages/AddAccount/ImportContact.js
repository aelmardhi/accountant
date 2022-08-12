import LocalizedStrings from 'react-localization';


export default  function ImportContact (props){
    const supported = 'contacts' in navigator;
    if(!supported)return(<div></div>)
    async function getContacts(e){
        try {
            const supportedProperties = await navigator.contacts.getProperties();
            let props = [];
            const opts = {multiple: false};
            if (supportedProperties.includes('name')) {
                props.push('name');
            }
            if (supportedProperties.includes('tel')) {
            props.push('tel');
            }
            const contacts = await navigator.contacts.select(props, opts);
            if(props.handleResults)
                props.handleResults(contacts);
        }catch( e){

        }
    }
    let strings = new LocalizedStrings({
        en:{
            importContact: 'Import Contact',
        },
        ar:{
            importContact: 'استيراد جهة اتصال',
        },
    });

    return (
        <div className='importContact'>
            <button className='btn' onClick={getContacts}>{strings.importContact}</button>
        </div>
    )
}