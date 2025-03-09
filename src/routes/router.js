import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "../pages/auth/signup/index.jsx"
import { Layout } from "../components/Layout/index.jsx"
import { Singin } from "../pages/auth/signin/index.jsx"

export const Router = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Singin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
