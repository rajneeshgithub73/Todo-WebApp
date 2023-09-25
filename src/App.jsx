import { useState } from 'react'
import './App.css'
import TodoForm from './components/todoForm'
import TodoItem from './components/todoItem'

function App() {

  return (
    <>
      <div className='main'>
        <div className='title-div'><h1>TODO Application</h1></div>
        <div className='todo-div'>
          <div className='form-div'>
            <TodoForm />
          </div>
          <div className='content-div'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
