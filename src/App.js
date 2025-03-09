import './App.css';
import { Router } from './routes/router'
import { UserProvider } from './context/UserProvider';
function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
