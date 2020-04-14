import React from 'react';
import Navbar from './NavbarW';
import Artifacts from './Artifactsw'
import { Form } from 'semantic-ui-react'
import '../App.css';
// import 'semantic-ui-css/semantic.min.css'

function Contact() {
  return (
    <div className="contact-div">
      <Artifacts/>
      <Navbar/>
      <div className="contact">
        <h2 className="contact-me">Contact Me</h2>
        <form className="contact-form" action="https://formspree.io/mvoqyevo" method="post">
          <div className="top-contact">
            <div className="top-field">
              <label className="labels">Name</label>
              <input type="text" name="name" placeholder="Name" className='top-input'/>
            </div>
            <div className="top-field">
              <label className="labels">Email</label>
              <input type="email" name="_replyto" placeholder="Email" className='top-input'/>
            </div>
          </div>
          <div className="message-div">
            <label className="labels">Message</label>
            <textarea type="text" name="message" placeholder="What can I do for you..." className='text-input'/>
          </div>
          <input type="submit" value="Send" class="contact-button"/>
        </form>
      </div>
    </div>
  );
}

export default Contact;