import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisbilityFilter from './components/VisibilityFilter'
import noteService from './services/notes'
import { initializeNote } from './reducers/noteReducer'

const App = (props) => {
  useEffect(() => {
    noteService.getAll().then(notes => props.initializeNote(notes))
  })
  return(
    <div>
      <NewNote />
      <VisbilityFilter />
      <Notes />
    </div>
  )
}

export default connect(null, {initializeNote})(App)