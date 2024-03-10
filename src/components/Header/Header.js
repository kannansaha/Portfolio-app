import React from 'react'
import { Link } from 'react-scroll';
import './Header.css';



const Header = () => {
  return (

    <div className='header'>
        <div className='header-left'>
            <h1>develop<span>er</span></h1>
        </div >
         <div className='header-right' >
            <Link to='About' smooth={true} duration={500} >
                <h4 >About Me</h4>
            </Link>
            <Link to='skills' smooth={true} duration={500} >
                <h4>Skills</h4>
            </Link>
            <Link to='Projects' smooth={true} duration={500} >
                <h4>Projects</h4>
            </Link>
            <Link to='Experience' smooth={true} duration={500} >
                <h4>Experience</h4>
            </Link>
            <Link to='Contact' smooth={true} duration={500} >
                <h4>Contact</h4>
            </Link>
            <h4 className='header-right-btn'>Join With Me</h4>
        </div>
    </div>
  )
}

export default Header;
