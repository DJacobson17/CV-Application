import { useState } from 'react'
import './App.css'
import EditArea from './components/EditArea'
import EditableCV from './components/EditableCV'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Editor</h1>
      </header>
      <main>
        <section>
          <EditableCV />
        </section>
        <section>
          <EditArea />
        </section>
      </main>
    </div>
  )
}
 

export default App
