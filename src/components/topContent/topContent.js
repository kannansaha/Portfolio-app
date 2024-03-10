import React from 'react'
import {Link} from 'react-scroll';
import './topContent.css';




const topContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent-container'>
            <h1>Mr.kannan s</h1>
            <p>A Professional  Web And App  Developer  </p>
            <a href='www.google.com'>
                <button className='topcontent-downloadbutton'>download CV</button>
            </a>
           
            <Link to='Projects' smooth='true' duration={500} >
            <button className='topcontent-workbutton'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default topContent;
