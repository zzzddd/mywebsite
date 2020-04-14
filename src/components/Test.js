import React from 'react';
import Navbar from './Navbar';
import Project from './Project';
import '../App.css';

const qh = {
  title: "Quality Hub",
  image: require("../images/qh.JPG"),
  text: "Apparently, when the AsyncButton is mounted (see componentDidMount), it calls our importComponent function. In our case, it will import and return the Button component. Until the import is done, the rendered DOM will be empty. When the missing component is loaded via a chunk file download, it will be added to the AsyncButton component’s state and the latter will re-render. Now, our async component will simply render the downloaded Button component with passed props.",
  // stack: [require("../images/apollo.png"),require("../images/django.png"),require("../images/express.png"),require("../images/graphql.png")]
}

function About() {
  return (
    <div>
      <Navbar/>
      <Project title={qh.title} image={qh.image} text={qh.text} stack={qh.stack}/>
    </div>
  );
}

export default About;