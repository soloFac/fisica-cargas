import React, { useEffect, useState } from 'react'
import Interface from './components/Interface/Interface'
import Layout from './components/Layout/Layout'

function App () {
  // Me dice que porcentaje del ancho del vw va a ocupar el Canvas
  // el resto queda para el formulario
  const vwCanvas = 0.7

  const [cargas, setCargas] = useState([
    {
      id: 0,
      signo: 'positiva',
      size: 20,
      pos: {
        x: 10,
        y: 10
      },
      valor: 250,
      potencia: 2
    },
    {
      id: 1,
      signo: 'negativa',
      size: 20,
      pos: {
        x: 180,
        y: 150
      },
      valor: 210,
      potencia: 3
    },
    {
      id: 2,
      signo: 'positiva',
      size: 20,
      pos: {
        x: 480,
        y: 250
      },
      valor: 210,
      potencia: 3
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
      <Interface
        cargas={cargas}
        setCargas={setCargas}
      />
    </section>
  )
}

export default App
