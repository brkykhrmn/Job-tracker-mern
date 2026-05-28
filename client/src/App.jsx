import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
