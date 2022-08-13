import LocalizedStrings from 'react-localization';


export default  function ImportContact (props){
    const supported = 'contacts' in navigator;
    if(!supported)return(<div></div>)
    async function getContacts(e){
        try {
            const supportedProperties = await navigator.contacts.getProperties();
            let properties = [];
            const opts = {multiple: false};
            if (supportedProperties.includes('name')) {
                properties.push('name');
            }
            if (supportedProperties.includes('tel')) {
                properties.push('tel');
            }
            const contacts = await navigator.contacts.select(properties, opts);
            if(props.handleResults)
                props.handleResults({name:contacts[0]?.name[0],tel:contacts[0]?.tel[0]});
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