import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "../pages/auth/signup/index.jsx"
import { Layout } from "../components/Layout/index.jsx"
import { Singin } from "../pages/auth/signin/index.jsx"
// import { Page404 } from "../pages/404"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Singin />} />
          <Route path="/signin" element={<Signup />} />
          {/* <Route path='*' element={<Page404 />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}