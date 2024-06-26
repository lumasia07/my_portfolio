import React, { Component } from 'react'
import './Desc.css'

class Desc extends Component {
  render() {
    return (
      <div className='desc'>
        <p>
        Lumasia is a frontend engineer with a background in Computer Science.
        He excels in creating user-friendly interfaces using technologies like HTML, CSS, and JavaScript frameworks. 
        With strong communication skills, he collaborates effectively with teams and prioritizes accessibility in his work.
        Passionate about user-centric design, he actively contributes to making the web a more inclusive space.
        </p>
        <h3>View my work below</h3>
        <button className='project-button'>Projects</button>
      </div>
    )
  }

}

export default Desc