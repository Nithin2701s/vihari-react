
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

import Tours from './pages/Tours';

import AddBus from './components/UI/AddBus';
import AllBuses from './components/UI/AllBuses';
import EditBus from './components/UI/EditBus';
import AllUsers from './components/UI/AllUsers';
import AddUser from './components/UI/AddUser';

import BusList from './components/UI/BusList';
import AddTour from './components/UI/AddTour';
import AllTours from './components/UI/AllTours';
import EditTour from './components/UI/EditTour';
import TourDetails from './components/UI/TourDetails';
import AddPlace from './components/UI/AddPlace';
import BusState from './context/bus/BusState';
import PassengerDetails from './components/UI/PassengerDetails';

function App() {
  return (
    <div className="App">
      <BusState>
      <UserState>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/layout' element={ <Layout/>}/>
          <Route exact path='/tours' element={<Tours/>}/>
          <Route exact  path='/buses' element={<BusList/>}/>
          <Route exact  path='/passengers' element={<PassengerDetails/>}/>

          <Route exact path='/admindb/allbuses' element={<AllBuses/>} />
          <Route exact path='/admindb/allusers' element={<AllUsers/>} />
          <Route exact path='/admindb/alltours' element={<AllTours/>}/>
          <Route exact path='/admindb/addbus' element={<AddBus/>}/>
          <Route exact path='/admindb/adduser' element={<AddUser/>}/>
          <Route exact path='/admindb/addtour' element={<AddTour/>}/>
          <Route exact path='/admindb/addplace/:id' element={<AddPlace/>}/>
          <Route exact path="/admindb/editbus/:id" element={ <EditBus/>}/>
          <Route exact path="/admindb/edittour/:id" element={ <EditTour/>}/>
          <Route exact path="/admindb/opentour/:id" element={ <TourDetails/>}/>

        </Routes>
    </Router>
    </UserState>
    </BusState>
    </div>
  );
}

export default App;
