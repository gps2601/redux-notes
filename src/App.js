import React from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisbilityFilter from './components/VisibilityFilter'

const App = (props) => {
  return(
    <div>
      <NewNote />
      <VisbilityFilter />
      <Notes />
    </div>
  )
}

export default App