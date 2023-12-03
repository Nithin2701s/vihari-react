
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import UserState from './context/User/UserState';
import Layout from './components/UI/Layout';
<<<<<<< HEAD
import Tours from './pages/Tours';
=======
import AddBus from './components/UI/AddBus';
import AllBuses from './components/UI/AllBuses';
import EditBus from './components/UI/EditBus';
import AllUsers from './components/UI/AllUsers';
import AddUser from './components/UI/AddUser';
>>>>>>> 3f160e1016171852d933daa92c5605f23f30eb51
function App() {
  return (
    <div className="App">
      <UserState>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/layout' element={ <Layout/>}/>
<<<<<<< HEAD
          <Route exact path='/tours' element={<Tours/>}/>
=======
          <Route exact path='/admindb/allbuses' element={<AllBuses/>} />
          <Route exact path='/admindb/allusers' element={<AllUsers/>} />
          <Route exact path='/admindb/addbus' element={<AddBus/>}/>
          <Route exact path='/admindb/adduser' element={<AddUser/>}/>
          <Route exact path="/admindb/editbus/:id" element={ <EditBus/>}/>
>>>>>>> 3f160e1016171852d933daa92c5605f23f30eb51
        </Routes>
    </Router>
    </UserState>
    </div>
  );
}

export default App;
