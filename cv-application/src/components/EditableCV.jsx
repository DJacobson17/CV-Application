import React from 'react'

function EditableCV() {
  return (
    <div>
        <GeneralInfo {...person} />
      
    </div>
  )
}

const person = { name: 'John Doe', email: 'johndoe@gmail.com', phone: '555-555-5555'}

function GeneralInfo(person) {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>{person.email}</p>
      <p>{person.phone}</p>
    </div>
  )
  }
  

export default EditableCV;