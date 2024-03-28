import React, { Component } from 'react'
import './Techstack.css'

export class Techstack extends Component {
  render() {
    return (
      <div className='techstack'>
        <h2>Technical skills</h2>
        <ul>
          <li id='html5'>HTML 5</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Tailwind CSS</li>
          <li>Next JS</li>
          <li>MySQL</li>
          <li>Linux</li>
          <li>Git & Github</li>
          <li>Python</li>
          <li>Bash Scripting</li>
          <li>C</li>
        </ul>
      </div>
    )
  }
}

export default Techstack