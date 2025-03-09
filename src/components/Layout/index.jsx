import { Outlet } from 'react-router-dom'
import { Navbar } from '../navbar/index.jsx'
import '../../App.css';

export const Layout = () => {

  return (<>
    <div className="App">
      <Navbar />
      <div className="layout">
        <Outlet />
      </div>
    </div>
  </>
  )
}