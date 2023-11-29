
import './App.css';
import Home from './components/UI/Home';
import Login from './components/UI/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import UserState from './context/User/UserState';
import Layout from './components/UI/Layout';
import AddBus from './components/UI/AddBus';
import AllBuses from './components/UI/AllBuses';
import EditBus from './components/UI/EditBus';
import AllUsers from './components/UI/AllUsers';
import AddUser from './components/UI/AddUser';
function App() {
  return (
    <div className="App">
      <UserState>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/layout' element={ <Layout/>}/>
          <Route exact path='/admindb/allbuses' element={<AllBuses/>} />
          <Route exact path='/admindb/allusers' element={<AllUsers/>} />
          <Route exact path='/admindb/addbus' element={<AddBus/>}/>
          <Route exact path='/admindb/adduser' element={<AddUser/>}/>
          <Route exact path="/admindb/editbus/:id" element={ <EditBus/>}/>
        </Routes>
    </Router>
    </UserState>
    </div>
  );
}

export default App;
