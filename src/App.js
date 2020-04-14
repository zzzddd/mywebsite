import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Test from './components/Test'
import './App.css';


function App() {
  alert("Mobile version coming soon!")
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/test' component={Test}/>    
    </div>
  )
}

export default App;
