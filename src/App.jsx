import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Card_list from './components/card_list'
import Detail from './Detail'
import Card_page from './Card_page'
import Nav from './components/nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-a'>
      
      {/* <button style={{marginLeft:'0px', position:'absolute', right:10}}>sort</button> */}
      <Card_page />
      {/* <Detail /> */}
      {/* <div className='card-lost'>
        <div className='card-img'>
          <img src="../src/assets/cat.jpg" alt="" style={{width:'100%', height:'100%'}} />
        </div>
        <div className='card-desc'>
          <ul className="a">
            <li>ชื่อ</li>
            <li>ลักษณะ</li>
            <li>สี</li>
            <li>เพศ</li>
          </ul>
        </div>
      </div> */}
    </div>
  )
}

export default App
