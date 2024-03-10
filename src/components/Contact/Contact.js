import React from 'react'
import {Element} from 'react-scroll'
import {IconButton} from '@mui/material';
import {Instagram,LinkedIn,GitHub, Facebook} from '@mui/icons-material';
import './Contact.css';

const Contact = () => {
  return (
   <Element className='Contact' id='Contact'>
        <h1>Contact</h1>
        <div className='Contact-Container'>
            <p>
                Email:<span>kannansaha8940@gmail.com</span>
            </p>
            <p>
                Github userame:<span>kannansaha</span>
            </p>
            <div className='Contact-icons'>  
                <a href='https://www.instagram.com/kannah_kutty/?next=%2F' target='_blank'>
                <IconButton>
                    <Instagram/>
                </IconButton>
                </a>
                <a href='https://www.linkedin.com/in/kannan-s-9573231b4/' target='_blank'>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
                </a>
                <a href='https://github.com/kannansaha' target='_blank'>
                <IconButton>
                    <GitHub/>
                </IconButton>
                </a>
                <a href='https://www.facebook.com/kannansaha.sivarajan' target='_blank'>
                <IconButton>
                    <Facebook/>
                </IconButton>
                </a>
            </div>
        </div>
   </Element>
  )
}

export default Contact;
