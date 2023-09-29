import React from 'react'
import './servicecard.css'
import { code } from '../assets/Assets'


const Servicecard = () => {
  return (
    <div className='card'>
      <div className="icon_circle">
       <img src={code} alt="codelogo" className='code_logo' />
      </div>
      <div className='card_title'>
         web design
      </div>
      <div className="card_subtitle">

       this is a content about the web design
      </div>
      


    </div>
  )
}

export default Servicecard