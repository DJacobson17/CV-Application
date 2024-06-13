import './App.css'
import React from 'react'
import { useState } from 'react'
import EditArea from './components/EditArea'
import EditableCV from './components/EditableCV'



export default function App() {
  const [person, setPerson] = useState({ name: 'John Doe', email: 'johndoe@gmail.com', phone: '555-555-5555', jobs: [{ id: 1, title: 'Software Engineer', company: 'Google', dates: '2018-2021', responsibilities: ['Worked on the Google search engine.', 'Managed a team of 10.'] }, { id: 2, title: 'Software Engineer', company: 'Facebook', dates: '2015-2018', responsibilities: ['Worked on the Facebook social network.', 'Managed a team of 5 developers.']}], education: [{ id: 1, degree: 'BS Computer Science', school: 'MIT', dates: '2011-2015', location: 'Cambridge, MA' }, { id: 2, degree: 'MS Computer Science', school: 'Stanford', dates: '2015-2017', location: 'Palo Alto, CA' }]})
  const [section, setSection] = useState('')  

  function updateSection(newSection) {
    setSection(newSection)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Editor</h1>
      </header>
      <main>
        <section>
          <EditableCV person={person}
                      section={section}
                      updateSection={updateSection}
          />
        </section>
        <section className='editArea'>
          <EditArea section={section} />
        </section>
      </main>
    </div>
  )
}
 


