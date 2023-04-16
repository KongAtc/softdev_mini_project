import React from 'react'
import Card from './card'
import '../components/card_list.css'

function card_list({data}) {
 

  return (  
    <div className='container-cl'>
      {data.map((el_item)=>{
                return <Card {...el_item} key={el_item.id_post}/>
      })}
    </div>
  )
}

export default card_list