import React, { useEffect, useState } from 'react'
import { Grilla } from './../Grilla'

export const Layout = ({ cargas }) => {
  const espaciado = 10

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight

    Grilla(vw, vh, espaciado)
  }, [width])

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  return (
    <div id='principal'>
      {/* <div><img id='imagen' src='img/cruzroja.png' alt='' /></div> */}
      <canvas id='linea' width={width} height={window.innerHeight} style={{ border: '0px solid #d3d3d3' }}/>
    </div>
  )
}
