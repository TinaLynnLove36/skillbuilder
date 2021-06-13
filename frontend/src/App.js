//styled components
import {StyledContainer} from './components/Styles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
     <Navbar />
     <StyledContainer>
      <Home />
      </StyledContainer>
       </Router>
  
  );
}

export default App;
