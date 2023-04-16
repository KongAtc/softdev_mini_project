import React from 'react'
import Card_list from './components/card_list'
import './Card_page.css'

function Card_page() {
    const data=[
        {id_post:'1', name_pet:'dog',location:'ladbang',name_owner:'kongooi',phone:'099999999'},
        {id_post:'2', name_pet:'cat',location:'prawet',name_owner:'Gameporo',phone:'099999999'},
        {id_post:'3', name_pet:'cat',location:'prawet',name_owner:'Gameporo',phone:'099999999'}
    ]

  return (
    <div className='container-cp'>
        <br />
        <h1 style={{textAlign:'center'}}>ประกาศน้องหาย</h1>
        
        <Card_list data={data}/>
    </div>
  )
}

export default Card_page