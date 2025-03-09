import './App.css';
import { useTranslation } from 'react-i18next';
import { Router } from './routes/router'
function App() {
  const { t, i18n } = useTranslation();
  console.log(t)
  return (
    <Router />
    // <div className="App">
    //   <Router future={{ v7_relativeSplatPath: true }}>
    //     <Navbar />
    //     <div className="layout">
    //       <Signup />

    //     </div>
    //   </Router>
    // </div>
  );
}

export default App;
