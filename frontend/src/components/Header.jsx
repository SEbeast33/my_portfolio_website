import React from 'react'
import './Header.css'
import { logo } from '../assets/Assets'
import { motion } from "framer-motion"




const Header = () => {
return (


  
    <motion.div className='header_container'  whileInView={{ y: [-30, 0], opacity: [0, 1] }}
    transition={{ duration: 0.8 }}>
        <div className='header'>
           <div className="brandlogo">

            <motion.svg  width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className = "animate_fill"   initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} > 
            <g id="logo svg">
<rect id="Rectangle8" width="43.9518" height="7.72211" rx="3.86105" transform="matrix(0.635688 -0.771946 0.754113 0.656745 0 33.9285)" fill="#02A2AE"  animate ={{rotate:360}} />
<rect id="Rectangle9" width="27.4132" height="7.55639" rx="3.7782" transform="matrix(0.635688 -0.771946 0.754113 0.656745 19.1191 31.7476)" fill="#FF5679"/>
<ellipse id="Ellipse2" cx="8.08846" cy="5.29311" rx="5.14706" ry="5.29311" fill="#FFAD14"/>
<ellipse id="Ellipse3" cx="46.323" cy="6.80545" rx="3.67647" ry="3.78079" fill="#F9A101"/>
</g>

            </motion.svg>
             
            
            
            <div className="brandname">
            Portfolio.
            </div>
          </div>
          <div className="nav_components">
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#">Home</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#">About us</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#">Projects</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#">Skills</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#">Contact</a></motion.div>
          </div>
          <div className="letstalkbutton">
            <motion.button className='lets_talk_button' whileHover={{scale : 1.1}}   whileTap={{ scale: 0.9 }}>Let's Talk</motion.button>
          </div>
        </div>
    </motion.div>

   
  )
}



export default Header