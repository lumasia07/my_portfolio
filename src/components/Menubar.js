import React, { Component } from 'react'
import './Menubar.css'

class Menubar extends Component {
  render() {
    return (
      <div className='menubar'>
        <ul>
            <li>My Skills</li>
            <li>Bio</li>
            <li>Projects</li>
            <li>My Services</li>
            <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Menubar