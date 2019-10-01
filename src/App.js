import React from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisbilityFilter from './components/VisibilityFilter'

const App = (props) => {
  const store = props.store

  return(
    <div>
      <NewNote store={store} />
      <VisbilityFilter store={store} />
      <Notes store ={store} />
    </div>
  )
}

export default App