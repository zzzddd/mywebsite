import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function About() {
  return (
    <div className='header'>
        <Link className='nav-name' to='/'>ZELEKE DEMA</Link>
        <div className='nav-items'>
            <Link className='nav-item' to='/about'>ABOUT</Link>
            <a className='nav-item' href='https://resume.creddle.io/resume/3z9fq65tc1f' target='_blank' rel="noopener noreferrer">RESUME</a>
            <Link className='nav-item' to='/projects'>PROJECTS</Link>
            <Link className='nav-item' to='/contact'>CONTACT ME</Link>
        </div>
    </div>
  );
}

export default About;