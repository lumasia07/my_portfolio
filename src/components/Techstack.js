import React, { Component } from 'react'
import './Techstack.css'

const skills = [
  'HTML5',
  'React JS',
  'Node JS',
  'Next JS',
  'Tailwind CSS',
  'Linux'
];

const Techstack = () => {
  return (
    <div className='techstack'>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Techstack