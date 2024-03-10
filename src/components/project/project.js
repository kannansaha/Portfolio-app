import React, { useState } from 'react';
import './project.css';

const Project = ({img,title,desc,link}) => {
    const [show,setShow]=useState(false);
  return (
   <a href={link} className='project-a-tag'>
    <div className='project' 
    onMouseEnter={()=>setShow(true)} 
    onMouseLeave={()=>setShow(false)}>
        {
            show ?(
                <div className='project-content'>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            ):(
                <img src={img} alt='project'/>
                )
        }
    </div>
   </a>
  );
};
export default Project;