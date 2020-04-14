import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import Navbar from './Navbar';
import Artifacts from './Artifacts'
import Project from './Project'
import '../App.css';

function Projects() {

  const qh = {
    title: "Child Nuteration health Tracker..",
    image: require("../images/child.png"),
    text: "Employed REST architectural pattern for back-end API and provided data persistence and incorporated authentication and authorization services in API for security",
            
    github: "https://github.com/ICNST",
    link: " https://youthful-wiles-abdce8.netlify.com/",
    stack: [require("../images/reactb.png"),require("../images/apollob.png"),require("../images/graphqlb.png"),require("../images/webrtcb.png")]
  }

  const cyoa = {
    title: "Create Your Own Adventure",
    image: require("../images/fivethw.png"),
    text: "",
    github: "https://github.com/buildweek-5th-wheel",
    link: "https://5thwheel-markking.netlify.com/",
    stack: [require("../images/reactb.png"),require("../images/nodeb.png"),require("../images/expressb.png")]
  }

  const cteb = {
    title: "Your Trip becomes fun with Trip Split...Jonin us..",
    image: require("../images/tripsplit.png"),
    text: "",
    github: "https://github.com/BW-Trip-Split",
    link: "https://trip-split-bw.herokuapp.com/",
    stack: [require("../images/reactb.png"),require("../images/pythonb.png"),require("../images/djangob.png")]
  }
  const cteb1 = {
    title: "Test Your General Knowlage..",
    image: require("../images/personalp.png"),
    text: "Personal Project,App which lets you know someting while you are playing..",
    github: "https://github.com/BW-Trip-Split",
    link: "https://trip-split-bw.herokuapp.com/",
    stack: [require("../images/reactb.png"),require("../images/pythonb.png"),require("../images/djangob.png")]
  }

  let slides = [
    {
      key: 1,
      content: <Project title={qh.title} image={qh.image} text={qh.text} stack={qh.stack} github={qh.github} link={qh.link}/>
    },
    {
      key: 2,
      content: <Project title={cyoa.title} image={cyoa.image} text={cyoa.text} stack={cyoa.stack} github={cyoa.github} link={cyoa.link}/>
    },
    {
      key: 3,
      content: <Project title={cteb.title} image={cteb.image} text={cteb.text} stack={cteb.stack} github={cteb.github} link={cteb.link}/>
    },
    {
      key: 4,
      content: <Project title={cteb1.title} image={cteb1.image} text={cteb1.text} stack={cteb1.stack} github={cteb1.github} link={cteb1.link}/>
    },
  ];
  return (
    <div className='projects'>
        <Artifacts/>
        <Navbar />
        <div className='carousel'>
            <Carousel slides={slides} showNavigation={true} offsetRadius={5}/>
        </div>
        <img className='shadow' src={require('../images/Shadow-PNG-Pic3.png')}/>
    </div>
  );
}

export default Projects;