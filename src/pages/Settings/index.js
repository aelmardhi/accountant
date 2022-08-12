
import { useEffect,useState } from 'react';
import LocalizedStrings from 'react-localization';
import { toJsonString } from '../../utils/db';

export default function Settings(props){
    const [fileString, setFileString] = useState('');
    useEffect(()=>{
        toJsonString().then(s=>{
            setFileString('data:image/jpeg;base64,'+btoa(s))
            // '' + btoa(data.data.reduce((a,i)=>a+String.fromCharCode(i),''));
        })
    },[]);
    function importFile(e){
        
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
        <article>
            <h1>{strings.settings}</h1>
            <ul>
                <li><a download="AccountantContacts.json" href={fileString}>{strings.exportFile}</a></li>
                <li><input type="file" accept='application/json' onChange={importFile}></input></li>
            </ul>
        </article>
    )
} 