import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Artifacts from './Artifacts'
import '../App.css';

function Home() {
  return (
    <div className='home'>
      <Artifacts/>
        <div className='homeLeft'>
            <img className='LRimages' src={require("../images/leftIMG.jpeg")}/>
            <h1 className="firstName">ZELEKE</h1>
            <h2 className="fsd">FULL   STACK   DEVELOPER</h2>
        </div>
        <div className='homeRight'>
            <h1 className="lastName">DEMA</h1>
            <nav className='home-nav'>
              <Link className='home-nav-item' to='/about'>ABOUT</Link>
              <a className='home-nav-item' href='https://resume.creddle.io/resume/3z9fq65tc1f' target='_blank' rel="noopener noreferrer">RESUME</a>
              <Link className='home-nav-item' to='/projects'>PROJECTS</Link>
              <Link className='home-nav-item' to='/contact'>CONTACT ME</Link>
            </nav>
            <img className='LRimages' src={require("../images/leftIMG.jpeg")}/>
        </div>
        <Footer className='footer'/>
    </div>
  );
}

export default Home;
