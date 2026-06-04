import './App.css'
import { Land } from './pages/Land'
import { Login } from './pages/Login'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Land></Land>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/create" element={<Home></Home>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
