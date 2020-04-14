import React from 'react';


function Project({title, image, text, stack, github, link}) {
  return (
    <div className='project-div'>
      <div className='project-div-top'>
        <h2 className="project-title">{title}</h2>
        <img src={image} className="project-image"/>
        <div className="project-text">{text}</div>
      </div>
      <div>
        <div className="project-stack">{stack.map(e => {
            return <img className="project-stack-image" src={e}/>
        })}</div>
        <div className="project-links">
          <div className="project-link-div project-link-left"><a href={github} target="_blank" className="project-link">Github</a></div>
          <div className="project-link-div project-link-right"><a href={link} target="_blank" className="project-link">Visit Site</a></div>
        </div>
      </div>
    </div>
  );
}

export default Project;