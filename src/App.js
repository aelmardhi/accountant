import {Route, Routes} from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import AddTransaction from './pages/AddTransaction';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addAccount' element={<AddAccount/>}></Route>
        <Route path='/account/:id' element={<Account/>}></Route>
        <Route path='/account/:accountId/addTransaction' element={<AddTransaction/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
