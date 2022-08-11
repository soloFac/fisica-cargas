import React, { useEffect, useState } from 'react'
import { Grilla } from './Grilla'
import Carga from './Carga'
import './Layout.css'
import { calcElectricFieldVector, setCharge } from '../helpers'
import { drawVectorE } from '../arrow'

const Layout = ({ cargas, setCargas, vwCanvas, calculoE, setCampoElectrico }) => {
  const espaciado = 30

  const [width, setWidth] = useState(window.innerWidth * vwCanvas)

  const setPos = (carga, x, y) => {
    carga.pos.x = x
    carga.pos.y = y

    setCharge(carga, setCargas)
  }
  // defino el nuevo ancho del canvas
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth * vwCanvas)
  })
  // Cuando se actualice el ancho de la pantalla
  useEffect(() => {
    const vh = window.innerHeight

    Grilla(width, vh, espaciado)
  }, [width])

  // Esto se debe al tamaño de la imagen, pues toma la posicion inicial en la esquina superior izquiera
  const changePosition = (e, carga) => {
    const x = e.clientX - (carga.size / 2)
    const y = e.clientY - (carga.size / 2)
    setPos(carga, x, y)
    // console.log(carga.signo, x, y)
  }
  // Obitene la posicion actual de una carga
  // Se lo utiliza para cuando se ingresa una nueva carga
  // const getPosition = (e) => {
  //   const x = e.clientX - (size / 2)
  //   const y = e.clientY - (size / 2)
  //   setPos(x, y)
  // }

  const obtenerPosicion = (e) => {
    if (calculoE === true) {
      const [Ex, Ey] = calcElectricFieldVector(cargas, { x: e.clientX, y: e.clientY })
      drawVectorE({ x: e.clientX, y: e.clientY }, Ex, Ey)
      setCampoElectrico({ Ex, Ey })
    }
  }

  return (
    <div
      id='principal'
      style={{ position: 'relative' }}
    >
      {/* <div><img id='imagen' src='img/cruzroja.png' alt='' /></div> */}
      <canvas
        id='linea'
        width={width}
        height={window.innerHeight}
        onMouseMove={(e) => obtenerPosicion(e)}
        // style={{ border: '0px solid #d3d3d3' }}
        // Cuando se ingresa una nueva carga
        // onClick={(e) => getPosition(e)}
      />
      {cargas.map(carga =>
        <Carga
          key={carga.id}
          carga={carga}
          changePosition={changePosition}
        />)}
    </div>
  )
}

export default Layout
