import './App.css';
import { AuthForm } from './components/authForm';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Signup } from './pages/auth/signup';
import { Singin } from './pages/auth/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="layout">
          <Signup />
          {/* <Singin /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
