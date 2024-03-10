import React from 'react'
import {Element} from 'react-scroll';
import Skillimage from '../Header/assets/skilsimage.jpg';
import { LinearProgress } from '@mui/material';
import './skillContainer.css';

const skillContainer = () => {
  return (
   <Element className='skillContainer' id='skills'>
        <div className='skilcontainer-image'>
            <img src={Skillimage} alt='skills' />
        </div>
        <div className='skillcontainer-text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer-skillset'>
                <h5>Html</h5>
                <div className='skillcontainer-slider skillcontainer-slider1'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>CSS</h5>
                <div className='skillcontainer-slider skillcontainer-slider2'>
                    <LinearProgress variant='determinate' value={80}/>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>JavaScript</h5>
                <div className='skillcontainer-slider skillcontainer-slider3'>
                    <LinearProgress variant='determinate' value={75}/>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>React</h5>
                <div className='skillcontainer-slider skillcontainer-slider4'>
                    <LinearProgress variant='determinate' value={65}/>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>Core Java</h5>
                <div className='skillcontainer-slider skillcontainer-slider5'>
                    <LinearProgress variant='determinate' value={85}/>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>Spring & Spring Boot</h5>
                <div className='skillcontainer-slider skillcontainer-slider6'>
                    <LinearProgress variant='determinate' value={75}/>
                </div>
            </div>
            <div className='skillcontainer-skillset'>
                <h5>SQL</h5>
                <div className='skillcontainer-slider skillcontainer-slider7'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
        </div>
   </Element>
  )
}

export default skillContainer;
