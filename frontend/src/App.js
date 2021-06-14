//styled components
import {StyledContainer} from './components/Styles';
import SBNews from './pages/SBNews';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Services from './pages/Services';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import About from './pages/About';

function App() {
  return (
    <Router>
     <Navbar />
        <Switch>
      <Route path='/sbnews' exact component={SBNews} />
      <Route path='/services' exact component={Services} />
      <Route path='/about' exact component={About} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/login' exact component={Login} />
      <Route path='/explore' exact component={Explore} />
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path='/signup' exact component={Signup} />
    </Switch>
    <StyledContainer>
      <Home />
    </StyledContainer>
   
       </Router>
  
  );
}

export default App;


