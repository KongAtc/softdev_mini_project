import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Card_list from './components/card_list'
import Detail from './Detail'
import Card_page from './Card_page'
import Nav from './components/nav'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div id="nav-bord">
            <h1>Find My Pet</h1>
            <div style={{width:'30%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <NavLink end to="/">Home</NavLink>
                <NavLink to="/profile">น้องหาย</NavLink>
                <NavLink to="/found">เจอน้องหลุด</NavLink>
            </div>
        </div>
      <Routes>
        <Route path="/" element={<Card_page />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router> 
  )
}

export default App
