import {Route, Routes} from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import Account from './pages/Account';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/account/:id' element={<Account/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
