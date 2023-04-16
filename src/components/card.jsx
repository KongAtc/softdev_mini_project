import React from 'react'
import '../components/card.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Detail from '../Detail'

function card() {
  return (
    <BrowserRouter>
      <div className='card-lost'>
        <div className='card-img'>
          <img src="../src/assets/cat.jpg" alt="" style={{width:'100%', height:'100%'}} />
        </div>
        <div className='card-desc'>
          <ul className="a">
            <li>ชื่อ</li>
            <li>สถานที่หาย</li>
            <li>เจ้าของ</li>
            <li>เบอร์ติดต่อ</li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default card