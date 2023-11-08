
import './App.css';
import Home from './components/UI/Home';
import Login from './components/UI/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/login' element={ <Login/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
