import { Route, Routes } from 'react-router'
import { DashBoard } from './components/pages/DashBoard'
import { Login } from './components/pages/Login'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<DashBoard/>}/>
    </Routes>
  )
}

export default App
    /*<div className='bg-[#FFFFFF] h-screen'>
      <NavBar/>
      <Container/>
    </div>*/