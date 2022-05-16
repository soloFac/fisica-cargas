import React, { useEffect, useState } from 'react'
import { Grilla } from './Grilla'
import Carga from './Carga'
import './Layout.css'

export const Layout = ({ cargas, setCargas, vwCanvas }) => {
  const espaciado = 50

  const [width, setWidth] = useState(window.innerWidth * vwCanvas)

  const setPos = (carga, x, y) => {
    const { id, size, signo } = carga
    const pos = { x, y }
    const cargasActualizadas = cargas.filter(c => ((c.id !== carga.id) ? c : null))
    cargasActualizadas.push({ id, signo, size, pos })
    setCargas(
      cargasActualizadas
    )
  }
  // Cuando se actualice el ancho de la pantalla
  useEffect(() => {
    const vh = window.innerHeight

    Grilla(width, vh, espaciado)
  }, [width])

  const changePosition = (e, carga) => {
    const x = e.clientX - (carga.size / 2)
    const y = e.clientY - (carga.size / 2)
    setPos(carga, x, y)
    // console.log(carga.signo, x, y)
  }
  // defino el nuevo ancho del canvas
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth * vwCanvas)
  })
  // Obitene la posicion actual de una carga
  // Se lo utiliza para cuando se ingresa una nueva carga
  // const getPosition = (e) => {
  //   // const x = e.clientX - (size / 2)
  //   // const y = e.clientY - (size / 2)
  //   // setPos(x, y)
  // }

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
