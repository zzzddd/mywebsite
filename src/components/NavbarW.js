import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function About() {
  return (
    <div className='header'>
        <Link className='nav-name-w' to='/'>Zeleke D.</Link>
        <div className='nav-items-w'>
            <Link className='nav-item-w' to='/about'>ABOUT</Link>
            <a className='nav-item-w' href='https://resume.creddle.io/resume/3z9fq65tc1f' target='_blank' rel="noopener noreferrer">RESUME</a>
            <Link className='nav-item-w' to='/projects'>PROJECTS</Link>
            <Link className='nav-item-w' to='/contact'>CONTACT ME</Link>
        </div>
    </div>
  );
}

export default About;