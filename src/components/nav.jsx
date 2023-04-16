import React from 'react'
import './nav.css'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Card_page from '../Card_page';
import Detail from '../Detail';

function nav() {
  return (
    <BrowserRouter>
        <div id="nav-bord">
            <h1>Find My Pet</h1>
            <div style={{width:'30%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <NavLink end to="/">Home</NavLink>
                <NavLink to="/lost">น้องหาย</NavLink>
                <NavLink to="/found">เจอน้องหลุด</NavLink>
            </div>
        </div>
      <Routes>
        <Route path="/" element={<Navigate to="/"/>} />
        <Route path="/found" element={<Navigate to="/"/>} />
        <Route path="/lost" element={<Card_page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default nav