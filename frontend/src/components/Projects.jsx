import React from 'react'
import './projects.css'
import Project_card from './Project_card'
import { motion,useScroll } from 'framer-motion'
import { useState,useEffect,useRef } from 'react'
import { backarrow, frontarrow } from '../assets/Assets.jsx';



const Projects = () => {

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVerySmallScreen,setIsVerySmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle media query change
    const handleResize = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Initial check and event listener
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsSmallScreen(mediaQuery.matches);
    const mediaquery2 = window.matchMedia('(max-width: 385px)');
    setIsVerySmallScreen(mediaquery2.matches);
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const handleNext = () => {
    let width = 332;
    if(isSmallScreen && !isVerySmallScreen){
      width=ref.current.clientWidth 
    }
    else if(isVerySmallScreen){
      width=ref.current.clientWidth 
    }
    ref.current.scrollLeft = ref.current.scrollLeft - width;
};

const handlePrev = () => {

    let width = 332;
    if(isSmallScreen && !isVerySmallScreen){
      width=ref.current.clientWidth 
    }
    else if(isVerySmallScreen){
      width=ref.current.clientWidth 
  }
      ref.current.scrollLeft = ref.current.scrollLeft + width;
};
  return (
    <div id='projects' className='projects_section'>
        <div className="section_title">
             <div className="projects_text">
                Projects
             </div>
             <div className="defines_progress_text">
             That Define Progress!!
             </div>
             <div className="explore_journey_text">
      Explore The Journey
      </div>
        </div>
    <div className='project_cards_section' ref={ref}>
         <Project_card />
         <Project_card/>
         <Project_card/>
         <Project_card/>
         <Project_card />
         <Project_card/>
         <Project_card/>
         <Project_card/>
    </div>
    <div className="scrollcontrol">
            <div className="ar" onClick={handleNext} ><img src={backarrow} alt="" /></div>
            <div className="scrollout">
            <motion.div className="scrollline" style={{scaleX:scrollXProgress}}> </motion.div>
            </div>
            <div className="ar1" onClick={handlePrev}><img src={frontarrow} alt="" /></div>
            </div> 
    </div>
  )
}

export default Projects