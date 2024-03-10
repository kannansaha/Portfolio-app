import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../Experience-Box/Experience'
import './ExperienceContainer.css'
const ExperienceContainer = () => {
  return (
    
    <Element className='ExperienceContainer' id='Experience'>
       <h1 style={{color:'aliceblue'}} >Experience</h1>
        <div className='ExperienceContainer-info'>
           <Experience number="+1" title="clients"/>
           <Experience number="+2" title="projects" style={{backgroundColor:"orangered"}}/>
        </div>
    </Element>
    
  )
}

export default ExperienceContainer
