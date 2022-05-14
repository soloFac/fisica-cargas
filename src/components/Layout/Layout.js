import React, { useEffect } from 'react'
import { Grilla } from './../grilla'

export const Layout = ({ cargas }) => {
  useEffect(() => {
    Grilla()
  }, [])

  return (
    <div id='principal'>
      {/* <div><img id='imagen' src='img/cruzroja.png' alt='' /></div> */}
      <canvas id='linea' width={window.innerWidth} height={window.innerHeight} style={{ border: '0px solid #d3d3d3' }}/>
    </div>
  )
}
