
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
function App() {
  return (
    <div className="App">
      <UserState>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/layout' element={ <Layout/>}/>
        </Routes>
    </Router>
    </UserState>
    </div>
  );
}

export default App;
