import React from 'react';
import {Element} from 'react-scroll';
import TopContent from '../topContent/topContent';
import './topContainer.css';


const topContainer = () => {
  return (
   <Element  name='About' className='topContainer'> 
   <TopContent/>
   </Element>
    
  )
}

export default topContainer;
