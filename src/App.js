import { Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Errors from './Components/Errors';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/contact' component={Contact} />
        <Route path='/*' component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
