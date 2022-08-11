import React, { useEffect, useState } from 'react'
import { drawVector } from './components/arrow'
import { calcVectoresF, calcElectricFieldVector } from './components/helpers'
import Interface from './components/Interface/Interface'
import { cleanCanvas, Grilla } from './components/Layout/Grilla'
import Layout from './components/Layout/Layout'

function App () {
  // Me dice que porcentaje del ancho del vw va a ocupar el Canvas
  // el resto queda para el formulario
  const vwCanvas = 0.7

  const [cargas, setCargas] = useState([
    {
      id: 0,
      signo: 'negativa',
      // Elimino el tamaño a modo representativo de la cantidad de carga ya que se puede tender
      // a confundir el concepto de carga puntual
      // Para todas el tamaño sera de 20
      size: 15,
      pos: {
        x: 300,
        y: 150
      },
      f: {
        x: 0,
        y: 0
      },
      // valor de la carga
      valor: 21,
      // solamente podra ser micro o nano Coulomb, es decir -6 o -9
      potencia: -6
    },
    {
      id: 1,
      signo: 'positiva',
      // Elimino el tamaño a modo representativo de la cantidad de carga ya que se puede tender
      // a confundir el concepto de carga puntual
      // Para todas el tamaño sera de 20
      size: 15,
      pos: {
        x: 500,
        y: 450
      },
      f: {
        x: 0,
        y: 0
      },
      // valor de la carga
      valor: 21,
      // solamente podra ser micro o nano Coulomb, es decir -6 o -9
      potencia: -6
    }
    // {
    //   id: 2,
    //   signo: 'negativa',
    //   size: 15,
    //   pos: {
    //     x: 100,
    //     y: 450
    //   },
    //   f: {
    //     x: 0,
    //     y: 0
    //   },
    //   valor: 21,
    //   potencia: -6
    // }
  ])

  const [calculoF, setCalculoF] = useState(false)
  const [calculoE, setCalculoE] = useState(false)

  const [campoElectrico, setCampoElectrico] = useState({ Ex: 0, Ey: 0 })

  const calcularFuerza = () => {
    // Primero reinicializo los valores de la Fuerza en 0
    for (let i = 0; i < cargas.length; i++) {
      cargas[i].f.x = 0
      cargas[i].f.y = 0
    }

    // Voy a crear una copia por valor del arreglo
    for (let i = 0; i < cargas.length; i++) {
      // Declaro un par de variables auxiliares para realizar la sumatoria
      for (let j = i + 1; j < cargas.length; j++) {
        const [Fx, Fy] = calcVectoresF(cargas[i], cargas[j])

        cargas[j].f.x = cargas[j].f.x + (Fx * -1)
        cargas[j].f.y = cargas[j].f.y + (Fy * -1)

        cargas[i].f.x = cargas[i].f.x + Fx
        cargas[i].f.y = cargas[i].f.y + Fy
      }
    }
  }

  const dibujarVectores = () => {
    cleanCanvas()

    Grilla(window.innerWidth * 0.7, window.innerHeight, 30)

    for (let i = 0; i < cargas.length; i++) {
      drawVector(cargas[i], cargas[i].f.x, cargas[i].f.y)
    }
  }

  const setVectorsF = () => {
    calcularFuerza()
    dibujarVectores()
  }

  // const setVectorE = (d) => {
  //   // calcularFuerza()
  //   drawElectricFieldVector(d)
  //   // dibujarVectores()
  // }

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
        calculoE={calculoE}
        setCampoElectrico={setCampoElectrico}
      />
      <Interface
        cargas={cargas}
        setCargas={setCargas}
        setVectors={setVectorsF}
        // Para saber si calcular la Fuerza
        calculoF={calculoF}
        setCalculoF={setCalculoF}
        // Para saber si calcular el Campo Electrico
        calculoE={calculoE}
        setCalculoE={setCalculoE}
        // Campo Electrico
        campoElectrico={campoElectrico}
      />
    </section>
  )
}

export default App
