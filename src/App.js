import './App.css';
import { AuthForm } from './components/authForm';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Signup } from './pages/auth/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="layout">
          <Signup />
          {/* <AuthForm /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
