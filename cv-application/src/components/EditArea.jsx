import React, { useState } from 'react'
import App from '../App'
import '../styles/editArea.css'

export default function EditArea({section}) {
  if (section == 'general-info') {
    return <GeneralInfoEdit />
  }
  else if (section == 'experience') {
    return <ExperienceEdit />
  }
  else if (section == 'education') {
    return <EducationEdit />
  }

  function GeneralInfoEdit({...person}) {
    return (
      <div>
        <h2>General Info Edit</h2>
        <form action="">
        <input type="text" value={person.name} placeholder='Name' />
        <input type="text" value={person.email} placeholder='Email' />
        <input type="text" value={person.phone} placeholder='Phone Number'/>
        
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  function ExperienceEdit() {
    return (
      <div>
        <h2>Work History Edit</h2>
        <form action="">
          <label for='jobTitle'>Job Title</label>
          <input type="text" id='jobTitle' name='jobTitle' />
          <label>Company:</label>
          <input type="text" />
          <label>Dates:</label>
          <input type="text" />
          <label>Responsibilities:</label>
          <input type="text" />
          <button className='responsibilty-add'>Add Responsibility</button>
          <button className='responsibility-delete'>Delete Responsibility</button>
          <button className="add-job">Add Job</button>
          <button className="delete-job">Delete Job</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  function EducationEdit() {
    return (
      <div>
        <h2>Education Edit</h2>
        <form action="">
          <label for='degree'>Degree:</label>
          <input type="text" id='degree' name='degree' />
          <label for='school'>School:</label>
          <input type="text" id='school' name='school' />
          <label for='dates'>Dates:</label>
          <input type="text" id='dates' name='dates' />
          <label for='location'>Location:</label>
          <input type="text" id='location' name='location'/>
          <button className="add-education">Add Education</button>
          <button className="delete-education">Delete Education</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

