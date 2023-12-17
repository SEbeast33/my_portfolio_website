import React from 'react'
import './text.css'
import { motion } from 'framer-motion'

const Text = () => {
  return (
    <motion.div  className='text_section'>
        
        <motion.div className="maintext"  animate={{y :[70,0,-70],opacity : [1]}} transition={{duration : 12,repeat:Infinity}}>
            <motion.div className='t1'  animate={{x:[-20,0],y:[10,0],opacity : [0,1]}} transition={{duration : 12,repeat:Infinity, type: "spring",
        damping: 12,
        stiffness: 100,staggerChildren:0.1,delayChildren:0.3}}><motion.span >nodejs</motion.span></motion.div>
            <div className='t2'><motion.span >reactjs</motion.span></div>
            <div className='t3'><motion.span >djangojs</motion.span></div>
        </motion.div>
    </motion.div>
  )
}

export default Text