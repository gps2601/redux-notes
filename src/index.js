import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import App from './App'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

const renderApp = () => {
  ReactDOM.render(
  <App store={store}/>, 
  document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)
