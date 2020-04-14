import React from 'react';
import Navbar from './Navbar';
import Artifacts from './Artifacts'
import '../App.css';

function About() {
  return (
    <div className='about-div'>
      <Artifacts/>
      <Navbar />
      <div className='me-div'>
        <img className='me' src={require('../images/zeleke.png')} /> 
      </div>
      <p className='about-text'>I am a Full Stack Developer who discovered a passion for programming while getting a degree in Information Technology. I specialize in React/Node applications but I am always branching out and learning new languages and technologies such as Python, Django, Web2py,and GraphQL.</p>
      <img className='shadow' src={require('../images/Shadow-PNG-Pic3.png')}/>
    </div>
  );
}

export default About;