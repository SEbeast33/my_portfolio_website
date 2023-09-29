import React from 'react'
import './Header.css'
import { closehum, logo, openhum } from '../assets/Assets'
import { motion } from "framer-motion"
import { Link } from 'react-scroll'
import { useState } from 'react'





const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  }

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }

  const fadeInStart = { opacity: 0 }
  const fadeInEnd = { opacity: 1 }
  const fadeInTransition = { duration: 1 }




return (


  
    <motion.div className='header_container'  whileInView={{ y: [-30, 0], opacity: [0, 1] }}
    transition={{ duration: 0.8 }}>
        <motion.div className='header' initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"} >
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
          <div className='menu-container'>

            <motion.div className="open_humberger" variants={hideNavItemsVariant} onClick={()=>{setMobileNavOpen(true)}}>
               <img src={openhum} alt="hum" />

            </motion.div>

          </div>
          <motion.div variants={mobileMenuVariant} className="mobile-menu">
          <motion.div className="close_humberger" variants={fadeInVariant} onClick={()=>{setMobileNavOpen(false)}}>
               <img src={closehum} alt="hum" />

            </motion.div>
            <motion.div  whileTap={()=>{setMobileNavOpen(false)}}    className="navitems" whileHover={{scale :1.1,y:-5}}><Link activeClass='active' to='home' spy={true} offset={-50} duration={500} >home</Link></motion.div>
            <motion.div whileTap={()=>{setMobileNavOpen(false)}}    className="navitems" whileHover={{scale :1.1,y:-5}}><Link activeClass='active' to='about' spy={true} offset={-50} duration={500}>About us</Link></motion.div>
            <motion.div whileTap={()=>{setMobileNavOpen(false)}}    className="navitems" whileHover={{scale :1.1,y:-5}}><Link activeClass='active' to='projects' spy={true} offset={-50} duration={500}>Projects</Link></motion.div>
            <motion.div whileTap={()=>{setMobileNavOpen(false)}}    className="navitems" whileHover={{scale :1.1,y:-5}}><Link activeClass='active' to='skills' spy={true} offset={-50} duration={500}>Skills</Link></motion.div>
            <motion.div whileTap={()=>{setMobileNavOpen(false)}}    className="navitems" whileHover={{scale :1.1,y:-5}}><Link activeClass='active' to='projects' spy={true} offset={-50} duration={500}>Contact</Link></motion.div>
          </motion.div>

          <div className="nav_components">
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><Link activeClass='active' to='projects' spy={true} offset={-50} duration={500} >home</Link></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#aboutus">About us</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a to="/projects">Projects</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#skills">Skills</a></motion.div>
            <motion.div className="navitems" whileHover={{scale :1.1,y:-5}}><a href="#home">Contact</a></motion.div>
          </div>
          <div className="letstalkbutton">
            <motion.button className='lets_talk_button' whileHover={{scale : 1.1}}   whileTap={{ scale: 0.9 }}>Let's Talk</motion.button>
          </div>
        </motion.div>
    </motion.div>

   
  )
}



export default Header