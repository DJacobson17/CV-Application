
import React, { useState } from 'react'
import '../styles/editableCV.css'
import App from '../App'
import EditArea from './EditArea'


export default function EditableCV ({
  person,
  updateSection
}) {

function GeneralInfo(person) {
  return (
    <>
      <section className="general-info">
        <EditButton />
        <h2>{person.name}</h2>
        <p>{person.email}</p>
        <p>{person.phone}</p>
      </section>
    </>
  )
}


function Experience(person) {
  return (  
    <>
      <section className="experience">
        <EditButton />
        <h2>Work History</h2>
        <ul>
          {person.jobs.map(job =>
                <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.dates}</p>
                <h3>{job.company}</h3>
                {job.responsibilities.map(task =>
                  <li key={task.id}>
                    {task}
                  </li>
                )}
              </li>
          )}        
        </ul>
      </section>
    </>
  )
}

function Education(person) {
  return (
    <>
      <section className="education">
        <EditButton />
        <h2>Education</h2>
        <ul>
          {person.education.map(edu =>
              <li key={edu.id}>
              <h3>{edu.degree}</h3>
              <p>{edu.dates}</p>
              <h3>{edu.school}</h3>
              <p>{edu.location}</p>
            </li>
          )}        
        </ul>
      </section>
    </>
  )
}



function EditButton() {
  return (
    <button className="push" onClick={(e) => updateSection(e.target.parentNode.parentNode.classList[0])}>
      <span className='shadow'></span>
      <span className="edge"></span>
      <span className='front'>
      Edit
      </span>
    </button>
  )
}
  return (
    <>
        <GeneralInfo {...person}/>
        <Experience {...person} />
        <Education {...person} />
    </>
  )
}


