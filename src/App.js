import React, { useEffect, useState } from 'react'
import Form from './components/Interface/Form'
import { Layout } from './components/Layout/Layout'

function App () {
  const vwCanvas = 0.7

  const [cargas, setCargas] = useState([
    {
      id: 0,
      signo: 'positiva',
      size: 20,
      pos: {
        x: 10,
        y: 10
      }
    },
    {
      id: 1,
      signo: 'negativa',
      size: 30,
      pos: {
        x: 180,
        y: 150
      }
    }
  ])

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Layout
        cargas={cargas}
        setCargas={setCargas}
        vwCanvas={vwCanvas}
      />
      <Form
        cargas={cargas}
        setCargas={setCargas}
      />
    </section>
  )
}

export default App
