
import { useEffect,useState } from 'react';
import LocalizedStrings from 'react-localization';
import { fromJsonString, toJsonString } from '../../utils/db';

export default function Settings(props){
    const [fileString, setFileString] = useState('');
    useEffect(()=>{
        toJsonString().then(s=>{
            setFileString('data:text/json;base64,'+btoa(s))
            // '' + btoa(data.data.reduce((a,i)=>a+String.fromCharCode(i),''));
        })
    },[]);
    async function importFile(e){
        // console.log(e.target.files[0].text());
        fromJsonString(await e.target.files[0].text())
            .then(console.log('file imported'))
    }
    let strings = new LocalizedStrings({
        en:{
            settings: 'Settings',
            exportFile: 'Export to File',
            importFile: 'Import from File',
        },
        ar:{
            newTransaction: 'معاملة جديدة',
            total: 'الصافي',
        },
    });
    return (
        <article className='column settings'>
            <h1>{strings.settings}</h1>
            <ul>
                <li><a download="AccountantContacts.json" href={fileString}>{strings.exportFile}</a></li>
                <li><input type="file" accept='application/json' data-label={strings.importFile} onChange={importFile}></input></li>
            </ul>
        </article>
    )
} 