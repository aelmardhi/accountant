import db, {addAccount,getAccount, updateAccount, addTransaction} from './utils/db';
import './App.css';

function App() {
  db()
  setTimeout(()=> updateAccount(1,'faf').then(console.log),100)
  return (
    <div className="App">
    <button onClick={()=>addTransaction(1,{amount:5})}>Add</button>
      <button onClick={()=>addAccount({name:'sdn'})}>Add account</button>
      <h3>{}</h3>
    </div>
  );
}

export default App;
