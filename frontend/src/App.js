import SBNews from "./pages/SBNews";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Logout from "./pages/Logout";
import Welcome from './components/Welcome';
import MySkillsDesktop from './components/MySkills/MySkillsDesktop'





function App() {

  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sbnews" exact component={SBNews} />
        <Route path="/services" exact component={Services} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/logout" exact component={Logout} />
         <Route path="/welcome" exact component={Welcome} />
          <Route path="/myskillsdesktop" exact component={MySkillsDesktop} />
      </Switch>
    </Router>
  );
}

export default App;




