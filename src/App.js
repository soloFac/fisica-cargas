import React, { useEffect, useState } from 'react'
import { drawVector } from './components/arrow'
import ordernarId, { calcVectoresF, calcElectricFieldVector } from './components/helpers'
import Interface from './components/Interface/Interface'
import { cleanCanvas, Grilla } from './components/Layout/Grilla'
import Layout from './components/Layout/Layout'

function App () {
  // Me dice que porcentaje del ancho del vw va a ocupar el Canvas
  // el resto queda para el formulario
  const vwCanvas = 0.8

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

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [calculoF, setCalculoF] = useState(false)
  const [calculoE, setCalculoE] = useState(false)

  const [campoElectrico, setCampoElectrico] = useState({ Ex: 0, Ey: 0 })

  const calcularFuerza = () => {
    let carga
    const cargasArray = []

    // Reset the value of the charges before work out
    for (let i = 0; i < cargas.length; i++) {
      carga = JSON.parse(JSON.stringify(cargas[i]))
      carga.f.x = 0
      carga.f.y = 0
      cargasArray.push(carga)
    }

    for (let i = 0; i < cargasArray.length; i++) {
      // Declaro un par de variables auxiliares para realizar la sumatoria
      for (let j = i + 1; j < cargasArray.length; j++) {
        const [Fx, Fy] = calcVectoresF(cargasArray[i], cargasArray[j])

        cargasArray[j].f.x = cargasArray[j].f.x + (Fx * -1)
        cargasArray[j].f.y = cargasArray[j].f.y + (Fy * -1)

        cargasArray[i].f.x = cargasArray[i].f.x + Fx
        cargasArray[i].f.y = cargasArray[i].f.y + Fy
      }
    }

    setCargas(cargasArray)
  }

  const dibujarVectores = () => {
    cleanCanvas()

    Grilla(window.innerWidth * vwCanvas, window.innerHeight, 30)

    for (let i = 0; i < cargas.length; i++) {
      drawVector(cargas[i], cargas[i].f.x, cargas[i].f.y)
    }
  }

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
        calculoF={calculoF}
        calcularFuerza={calcularFuerza}
        setPosition={setPosition}
      />
      <Interface
        cargas={cargas}
        setCargas={setCargas}
        dibujarVectores={dibujarVectores}
        calcularFuerzas={calcularFuerza}
        // Para saber si calcular la Fuerza
        calculoF={calculoF}
        setCalculoF={setCalculoF}
        // Para saber si calcular el Campo Electrico
        calculoE={calculoE}
        setCalculoE={setCalculoE}
        // Campo Electrico
        campoElectrico={campoElectrico}
        position={position}
      />
    </section>
  )
}

export default App
