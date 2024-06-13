import React from 'react'
import { useState } from 'react'
import App from '../App'

export default function EditArea({section}) {
  if (section == 'general-info') {
    return <GeneralInfoEdit />
  }
  else if (section == 'experience') {
    return <ExperienceEdit />
  }

  function GeneralInfoEdit({...person}) {
    return (
      <div>
        <h2>General Info Edit</h2>
        <label>Name:</label>
        <input type="text" value={person.name} />
        <input type="text" value={person.email} />
        <input type="text" value={person.phone} />
        <button>Save</button>
      </div>
    )
  }

  function ExperienceEdit() {
    return (
      <div>
        <h2>Experience Edit</h2>
        <label>Title:</label>
        <input type="text" />
        <label>Company:</label>
        <input type="text" />
        <label>Dates:</label>
        <input type="text" />
        <label>Responsibilities:</label>
        <input type="text" />
        <button className='responsibilty'>Add Responsibility</button>
        <button>Save</button>
      </div>
    )
  }
}

