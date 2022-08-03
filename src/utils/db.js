

/***
 * account table should have:
 * auto oncrement id
 * name unique
 * phone
 * transactions { amount, details, date, }
 */
const dbName = 'accountant'
const AccountsTableName = 'accounts'

const IndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let db;
export default function(){
    const request = IndexedDB.open(dbName);
    request.onsuccess = (event)=>{
        db = event.target.result;
    }
    request.onerror = (event) => {
        console.log('error opening the database')
    };
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore(AccountsTableName,{autoIncrement:true});
        objectStore.createIndex("name", "name", { unique: true });
    }
}

export function addAccount(account){
    const transaction = db.transaction([AccountsTableName], "readwrite");
    const objectStore = transaction.objectStore(AccountsTableName);

    account.transactions = []
    const request = objectStore.add(account); 
    return new Promise((res,rej)=>{
        request.onerror = (event) => {
            rej(new Error('error happend can add account '+account))
         };
         request.onsuccess = (event) => {
            res(event.target.result)
        };
    })
}

export function getAccount(id){
    const transaction = db.transaction([AccountsTableName], "readwrite");
    const objectStore = transaction.objectStore(AccountsTableName);

    const request = objectStore.get(id);

    return new Promise((res,rej)=>{
        request.onerror = (event) => {
            rej(new Error('error happend can get account '+id))
         };
         request.onsuccess = (event) => {
            res(event.target.result)
        };
    })
}

export function removeAccount(id){
    const transaction = db.transaction([AccountsTableName], "readwrite");
    const objectStore = transaction.objectStore(AccountsTableName);

    const request = objectStore.delete(id);

    return new Promise((res,rej)=>{
        request.onerror = (event) => {
            rej(new Error('error happend can remove account '+id))
         };
         request.onsuccess = (event) => {
            res(event.target.result)
        };
    })
}

export function updateAccount(id,name,phone){
    const transaction = db.transaction([AccountsTableName], "readwrite");
    const objectStore = transaction.objectStore(AccountsTableName);

    const request = objectStore.get(id);

    return new Promise((res,rej)=>{
        request.onerror = (event) => {
            rej(new Error('error happend can get account '+id))
         };
         request.onsuccess = (event) => {
            const data = event.target.result
            if(name) data.name = name
            if(phone) data.phone = phone
            const requestUpdate = objectStore.put(data, id);
            requestUpdate.onerror = (event) => {
                rej(new Error('error happend can put account '+id))
            };
            requestUpdate.onsuccess = (event) => {
                res(event.target.result)
            };
        };
    })
}


export function addTransaction(accountId,transaction){
    const objectStore = db.transaction([AccountsTableName], "readwrite").objectStore(AccountsTableName);

    const request = objectStore.get(accountId);

    return new Promise((res,rej)=>{
        request.onerror = (event) => {
            rej(new Error('error happend can get account '+accountId))
         };
         request.onsuccess = (event) => {
            const data = event.target.result
            transaction.id = data.transactions.length?
                data.transactions.at(-1).id +1 : 0
            data.transactions.push(transaction)
            const requestUpdate = objectStore.put(data, accountId);
            requestUpdate.onerror = (event) => {
                rej(new Error('error happend can add transaction to account '+accountId))
            };
            requestUpdate.onsuccess = (event) => {
                res(event.target.result)
            };
        };
    })
}



