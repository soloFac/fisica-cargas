import React from 'react'

export const Grilla = (vw, vh, espaciado) => {
  const canvas = document.querySelector('#linea')

  dibujarGrilla(canvas, vw, vh, espaciado)
}

const dibujarGrilla = (canvas, vw, vh, espaciado) => {
  const ctx = canvas.getContext('2d')
  // defino el ancho del canvas
  canvas.width = vw
  ctx.strokeStyle = '#D9D9D9'
  ctx.stroke()

  for (let x = 0; x <= vw; x += espaciado) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, vh)
  }
  for (let y = 0; y <= vh; y += espaciado) {
    ctx.moveTo(0, y)
    // define el largo de las lineas horizontales
    ctx.lineTo(vw, y)
  }

  ctx.stroke()
}
