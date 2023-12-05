
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
import About from './pages/About';
import Gallery from './components/UI/Gallery';

import BusList from './components/UI/BusList';
import AddTour from './components/UI/AddTour';
import AllTours from './components/UI/AllTours';
import EditTour from './components/UI/EditTour';
import TourDetails from './components/UI/TourDetails';
import AddPlace from './components/UI/AddPlace';
import BookTour from './components/UI/BookTour';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <UserState>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/layout' element={ <Layout/>}/>
          <Route exact path='/tours' element={<Tours/>}/>
          <Route exact path='/Gallery' element={<Gallery/>}/>
          <Route exact  path='/buses' element={<BusList/>}/>
          <Route exact path='/admindb/allbuses' element={<AllBuses/>} />
          <Route exact path='/admindb/allusers' element={<AllUsers/>} />
          <Route exact path='/admindb/alltours' element={<AllTours/>}/>
          <Route exact path='/admindb/addbus' element={<AddBus/>}/>
          <Route exact path='/admindb/adduser' element={<AddUser/>}/>
          <Route exact path='/admindb/addtour' element={<AddTour/>}/>
          <Route exact path='/admindb/addplace/:id' element={<AddPlace/>}/>
          <Route exact path="/admindb/editbus/:id" element={ <EditBus/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path="/admindb/edittour/:id" element={ <EditTour/>}/>
          <Route exact path="/admindb/opentour/:id" element={ <TourDetails/>}/>
          <Route exact path='/admindb/booktour/:id' element={ <BookTour/>}/>
          <Route exact path='/contact' element={ <Contact/>}/>
        </Routes>
    </Router>
    </UserState>
    </div>
  );
}

export default App;
