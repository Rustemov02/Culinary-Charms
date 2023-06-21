import React, { useState } from 'react'
import Login from './Login'
import Category from './Category'
import './App.css'

export default function App() {

  const [name, setName] = useState('')
  let isOpen = localStorage.getItem('inputValue') ? true : false

  const handleInputChange = event => {
    setName(event.target.value)
  }

  const username = localStorage.getItem('inputValue')

  const handleAddToLocalStorage = () => {
    localStorage.setItem('inputValue', name)
    setName('')
  }

  return (
    <div>
      {isOpen ? <Category name={username} /> : <Login name={name} changeValue={handleInputChange} login={handleAddToLocalStorage} />}
    </div>
  )
}