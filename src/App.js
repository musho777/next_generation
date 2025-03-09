import './App.css';
import { AuthForm } from './components/authForm';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Signup } from './pages/auth/signup';
import { Singin } from './pages/auth/signin';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  console.log(t)
  return (
    <div className="App">
      <Router future={{ v7_relativeSplatPath: true }}>
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
