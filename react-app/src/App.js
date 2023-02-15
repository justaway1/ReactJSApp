import React from 'react'
import './scss/App.scss'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Employees from './Components/Employees'

function App () {
  return (
    <div>
      <Header />
      <Content />
      <Employees />
      <Footer />
    </div>
  )
}

export default App
