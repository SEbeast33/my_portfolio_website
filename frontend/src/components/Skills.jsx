import React from 'react'
import './skills.css'
import { premiere } from '../assets/Assets'
import { motion } from 'framer-motion'


const Skills = () => {
  return (
    <div className='skills_container'>
        <div className="skills_text">
        Skills And Experience
        </div>
        <div className="skills_and_experience_container" id='skills'>
           <div className="left_icon_container">
            <motion.div className="skills_icon_and_text" animate ={{y :[-6,10,-6]}} transition={{ repeat : Infinity, duration :1.6, delay :1}}>
               <motion.div className="iconofskill" whileInView={{x : [320,0], y: [180,0],rotate : [360,0],opacity : [0,1]}}  transition={{duration : 1}}>
                <img src={premiere} alt="" />
               </motion.div>

               <div className="textofskill">
               Premiere
               </div>
            </motion.div>
            <div className="skills_icon_and_text_middle">
                
            </div>
            <div className="skills_icon_and_text">
                
            </div>
               
           </div>
           <div className="experience_card">
           
           </div>
           <div className="right_icon_container">
           <div className="skills_icon_and_text">

               </div>
                <div className="skills_icon_and_text_middle_right">
    
                </div>
               <div className="skills_icon_and_text">
    
                </div>
           </div>
        </div>
    </div>
  )
}

export default Skills