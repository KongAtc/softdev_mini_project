import React from 'react'
import Card from './card'
import '../components/card_list.css'

function card_list(items) {
  return (  
    <div className='container-cl'>
        {/* {items.map((item) => <Card />)} */}
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default card_list