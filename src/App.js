import db, {addAccount,getAccount,getAccountByName,getAccountAll, updateAccount, addTransaction,getTransaction,removeAccount} from './utils/db';
import './App.css';

function App() {
  db()
  setTimeout(()=>{ 
    getAccountAll().then(console.log)
  },100)
  return (
    <div className="App">
    <button onClick={()=>addTransaction(1,{amount:5})}>Add</button>
      <button onClick={()=>addAccount({name:'sdn'})}>Add account</button>
      <button onClick={()=>removeAccount(2)}>remove account</button>
      <h3>{}</h3>
    </div>
  );
}

export default App;
