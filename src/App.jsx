import { useState } from 'react'
import Title from './components/Title'
import Calc from './components/Calc'
import Info from './components/Info'
import Table from './components/Table'

import './App.css'

function App() {
  return (
    <>
      <Title />
      <Calc />
      <Table />
      <Info />
    </>
  )
}

export default App
