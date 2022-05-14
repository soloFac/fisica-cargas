import React from 'react'

export const Grilla = () => {
  const principal = document.querySelector('html')

  console.log('sdf')

  const espaciado = 30
  const canvas = document.getElementById('linea')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  ctx.moveTo(540, 328)
  ctx.lineTo(544, 100)
  ctx.strokeStyle = '#ffffff'
  ctx.stroke()

  for (let x = 0; x <= 1360; x += espaciado) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, window.innerHeight)
  }

  for (let y = 0; y <= 700; y += espaciado) {
    ctx.moveTo(0, y)
    ctx.lineTo(window.innerWidth, y)
  }
}
