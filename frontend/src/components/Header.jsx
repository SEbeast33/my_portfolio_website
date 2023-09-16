import React from 'react'
import './Header.css'
import { logo } from '../assets/Assets'
import { motion } from "framer-motion"



const Header = () => {
  const svgVariants = {
    hidden : { opacity: 0, fill: "transparent" },
    visible:{opacity: 1,
    transition :{duration :1 }}
  }
  const icon = {
    hidden: {
      pathLength: 0,
      fill:" #FF5679"
    },
    visible: {
      pathLength: 1,
      fill: "#02A2AE"
    }
  }


  return (
    <div className='header_container'>
        <div className='header'>
           <div className="brandlogo">
            <img src={logo} alt="brand logo" />
        
             
            
            
            <div className="brandname">
            Portfolio.
            </div>
          </div>
          <div className="nav_components">
            <div className="navitems"><a href="#">Home</a></div>
            <div className="navitems"><a href="#">About us</a></div>
            <div className="navitems"><a href="#">project</a></div>
            <div className="navitems"><a href="#">Skills</a></div>
            <div className="navitems"><a href="#">contact</a></div>
          </div>
          <div className="letstalkbutton">
            <button className='lets_talk_button'>Let's Talk</button>
          </div>
        </div>
    </div>
  )
}



export default Header