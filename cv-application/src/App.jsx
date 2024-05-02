import './App.css'
import React from 'react'
import { useState } from 'react'
import EditArea from './components/EditArea'
import EditableCV from './components/EditableCV'

export default function App() {
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
 


