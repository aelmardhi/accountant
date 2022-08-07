import {Navigate, Route, Routes} from 'react-router-dom'
import { useEffect ,useState } from 'react';
import init from './utils/db'
import './App.css';

import Home from './pages/Home';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTeansaction';
import EditAccount from './pages/EditAccount';
function App() {
  const [dbAvailable, setDbAvailable] = useState(false);
  useEffect(()=>{
    init().then(d=>{
      setDbAvailable(d);
    })
  },[]);
  
  if(dbAvailable)
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addAccount' element={<AddAccount/>}></Route>
          <Route path='/account/:id' element={<Account/>}></Route>
          <Route path='/account/:id/edit' element={<EditAccount/>}></Route>
          <Route path='/account/:accountId/addTransaction' element={<AddTransaction/>}></Route>
          <Route path='/account/:accountId/editTransaction/:transactionId' element={<EditTransaction/>}></Route>
          <Route  path='*' element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    );
  return(<div></div>)
}

export default App;
