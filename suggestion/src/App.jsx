import React, { useState } from 'react'
import Login from './Login'
import Category from './Category'
import './App.css'
import Test from './Test'

export default function App() {

  const [name, setName] = useState('')
  let isOpen = localStorage.getItem('inputValue') ? true : false

  const handleInputChange = event => {
    setName(event.target.value)
  }

  const username = localStorage.getItem('inputValue')

  const handleAddToLocalStorage = () => {
    if(name.trim() == '') return alert('Zəhmət olmasa adınızı daxil edin ')
    localStorage.setItem('inputValue', name)
    setName('')
  }

  return (
    <div>
      {/* <Test/> */}
      {isOpen ? <Category name={username} /> : <Login name={name} changeValue={handleInputChange} login={handleAddToLocalStorage} />}
    </div>
  )
}