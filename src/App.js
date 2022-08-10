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
      // Elimino el tamaño a modo representativo de la cantidad de carga ya que se puede tender
      // a confundir el concepto de carga puntual
      // Para todas el tamaño sera de 20
      size: 20,
      pos: {
        x: 80,
        y: 50
      },
      f: {
        x: 0,
        y: 0
      },
      // valor de la carga
      valor: 250,
      // solamente podra ser micro o nano Coulomb, es decir -6 o -9
      potencia: -6
    },
    {
      id: 1,
      signo: 'negativa',
      // Elimino el tamaño a modo representativo de la cantidad de carga ya que se puede tender
      // a confundir el concepto de carga puntual
      // Para todas el tamaño sera de 20
      size: 20,
      pos: {
        x: 502,
        y: 222
      },
      f: {
        x: 0,
        y: 0
      },
      // valor de la carga
      valor: 210,
      // solamente podra ser micro o nano Coulomb, es decir -6 o -9
      potencia: -9
    }
    // ,
    // {
    //   id: 2,
    //   signo: 'positiva',
    //   size: 20,
    //   pos: {
    //     x: 480,
    //     y: 250
    //   },
    //   valor: 210,
    //   potencia: 3
    // }
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
