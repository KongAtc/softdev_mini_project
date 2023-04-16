import React, { useEffect, useState } from 'react'
import Card_list from './components/card_list'
import './Card_page.css'
import {collection , addDoc, getDocs,} from 'firebase/firestore'
import { db } from './firebase'

function Card_page() {
    const [pet, setPet] = useState([]);

    

    const fetchPost = async () => {
        await getDocs(collection(db, "mypet"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setPet(newData)
                console.log(pet, newData)
            })
    }

    useEffect(() =>{
        fetchPost();
    },[]);

    // const data=[
    //     {id_post:'1', name_pet:'dog',location:'ladbang',name_owner:'kongooi',phone:'099999999'},
    //     {id_post:'2', name_pet:'cat',location:'prawet',name_owner:'Gameporo',phone:'099999999'},
    //     {id_post:'3', name_pet:'cat',location:'prawet',name_owner:'Gameporo',phone:'099999999'}
    // ]

  return (
    <div className='container-cp'>
        <br />
        <h1 style={{textAlign:'center'}}>ประกาศน้องหาย</h1>
        
        <Card_list data={pet}/>
    </div>
  )
}

export default Card_page