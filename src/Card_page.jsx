import React from 'react'
import Card_list from './components/card_list'
import './Card_page.css'

function Card_page() {
  return (
    <div className='container-cp'>
        <br />
        <h1 style={{textAlign:'center'}}>ประกาศน้องหาย</h1>
        <Card_list />
    </div>
  )
}

export default Card_page