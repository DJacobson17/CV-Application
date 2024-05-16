import React from 'react'

function EditableCV() {
  return (
    <>
        <GeneralInfo {...person} />
        <Experience {...person} />
    </>
  )
}

const person = { name: 'John Doe', email: 'johndoe@gmail.com', phone: '555-555-5555', jobs: [{ id: 1, title: 'Software Engineer', company: 'Google', dates: '2018-2021', responsibilities: ['Worked on the Google search engine.', 'Managed a team of 10.'] }, { id: 2, title: 'Software Engineer', company: 'Facebook', dates: '2015-2018', responsibilities: ['Worked on the Facebook social network.', 'Managed a team of 5 developers.']}]}

function GeneralInfo(person) {
  return (
    <>
      <section className="general-info">
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

export default EditableCV;