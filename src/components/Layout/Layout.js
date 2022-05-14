import React from 'react'
import { fisica } from '../fisica'

export const Layout = ({ cargas }) => {
  fisica()
  return (
    <div>
      <div><img id='imagen' src='img/cruzroja.png' alt='' /></div>
      <canvas id='linea' width='1080' height='657' style='border:0px solid #d3d3d3;'/>
    </div>
  )
}
