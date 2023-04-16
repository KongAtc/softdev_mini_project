import React from 'react'
import '../components/card.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Detail from '../Detail'

function card(props) {
  const {id_post,name_pet,location,name_owner,phone} = props

  return (
      <div className='card-lost'>
        <div className='card-img'>
          <img src="../src/assets/cat.jpg" alt="" style={{width:'100%', height:'100%'}} />
        </div>
        <div className='card-desc'>
          <ul className="a">
            <li>ชื่อ : {name_pet}</li>
            <li>สถานที่หาย : {location}</li>
            <li>เจ้าของ : {name_owner}</li>
            <li>เบอร์ติดต่อ : {phone}</li>
          </ul>
        </div>
      </div>
  )
}

export default card