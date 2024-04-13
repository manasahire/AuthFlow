import RegistrationForm from './Registration-Form';
import './App.css';
import { Home } from './home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './Login';
import RegistrationDetails from './details';



function App() {
  return (
    <div className="App">
      < Router>
        <nav className="navbar">
          <Link to='/home' >home </Link>&nbsp;&nbsp;&nbsp;
          <Link to='/form' >form </Link>&nbsp;&nbsp;&nbsp;
          <Link to='/Login' >Login </Link>&nbsp;&nbsp;&nbsp;
          <Link to='/display' >display </Link>&nbsp;&nbsp;&nbsp;
        </nav>
        < Routes>
          <Route path='' element=< Home /> ></Route>
          <Route path='home' Component={Home}> </Route>
          <Route path='form' Component={RegistrationForm}> </Route>
          <Route path='Login' Component={LoginForm}> </Route>
          <Route path='display' Component={RegistrationDetails}> </Route>
          <Route path='*' Component={Home}> </Route>
        </Routes>
      </ Router>
    </div>
  );
}

export default App;
