import React from 'react'
import './projects.css'
import Project_card from './Project_card'
import { motion } from 'framer-motion'


const Projects = () => {
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
    <div className='project_cards_section'>
         <Project_card />
         <Project_card/>
         <Project_card/>
         <Project_card/>
    </div>
    </div>
  )
}

export default Projects