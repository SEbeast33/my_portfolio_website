import React from 'react'
import './project_card.css'
import { admindashboard } from '../assets/Assets'
import { color, motion } from 'framer-motion'
import { useState } from 'react'




const Project_card = () => {

  const [isHovered, setHovered] = useState(false)

  return (
    

    <motion.div className='card_container' whileHover={{scale : 1.1,y : -8}}>
        <div className="project__card">
          <motion.div className="image_container" whileHover={{scale:1.1}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <img src= {admindashboard} alt="this is admin dashboard" className='image_of_project'  />
            <a href="https://www.framer.com/motion/gestures/" >
            <motion.div className="circle__icon" initial ={false} animate ={{ x : isHovered?-100:0, y: isHovered? -100:0, opacity: isHovered? 1:0}} >
              
            </motion.div>
            </a> 
          </motion.div>
          <div className="project_tag">
            <div className="reacttext">
            React.js
            </div>
          </div>
          <div className="project_title">
             Admin dashboard
          </div>
          <div className="project_description">
          this project defines a idea about admin dashboard made 
            react and django by me
          </div>
        </div>
    </motion.div>

  )
}

export default Project_card