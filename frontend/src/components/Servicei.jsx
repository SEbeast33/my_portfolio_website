import React from 'react'
import './services.css'
import { motion } from 'framer-motion'
import Servicecard from './Servicecard'

const Servicei = () => {
  return (
    <div className='services_container' id='about'>
        <div className="service_text">
        
              
                <motion.div className="services"  whileInView={{x :[-70,0],opacity : [0,0.5,1]}} transition={{duration : 0.4}} >services</motion.div>
                <motion.div className="i_provide_a_wide_range" whileInView={{x :[-50,0],opacity : [0,0.5,1]}} transition={{duration : 0.7}}  >
                 I provide a wide range of digital services
            </motion.div>
         
          
        </div>

        <div className="service_cards">
           <Servicecard/>
           <Servicecard/>
           <Servicecard/>

        </div>
    </div>
  )
}

export default Servicei