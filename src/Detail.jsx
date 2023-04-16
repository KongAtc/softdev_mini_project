import React from 'react'
import "./Detail.css"

function Detail() {
  return (
    <div className='container'>
        <div className='Map-box'>Map</div>
        <div className='Detail'>Detail</div>
        <div className='Pic'>
            <img style={{width:'20%'}} src="../src/assets/cat.jpg" alt="" />
        </div>
    </div>
  )
}

export default Detail