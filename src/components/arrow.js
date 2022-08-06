
import React from 'react'

// Dibujar un triangulo
export const drawVector = () => {
  const canvas = document.querySelector('#linea')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    // este sera el largo o alto definido para cada linea de la flecha

    const hip = Math.sqrt(20 ** 2 + 20 ** 2)
    // Ya que la posicion inicial de la imagen es su esquina, no el centro
    const dist = hip / 2

    const pos0X = 50 + dist
    const pos0Y = 420 + dist

    const Fx = 275
    const Fy = 155

    const posX = pos0X + Fx
    const posY = pos0Y + Fy

    const h = 15

    const alfa = Math.atan(Fy / Fx)
    console.log('alfa en radianes: ', alfa)
    console.log('alfa en grados: ', alfa * (180 / Math.PI))

    // Draw the line - arrow body
    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = 'white'
    ctx.moveTo(pos0X, pos0Y)
    ctx.lineTo(posX, posY)
    ctx.stroke()

    // curve top arrow
    ctx.beginPath()
    ctx.moveTo(posX, posY)
    ctx.strokeStyle = 'white'
    let flechaX = posX - (Math.sin(45 * (Math.PI / 180) - alfa) * h)
    let flechaY = posY - (Math.cos(45 * (Math.PI / 180) - alfa) * h)
    ctx.lineTo(flechaX, flechaY)
    ctx.stroke()

    // curve bottom arrow
    ctx.beginPath()
    ctx.moveTo(posX, posY)
    ctx.strokeStyle = 'white'
    flechaX = posX - (Math.sin(135 * (Math.PI / 180) - alfa) * h)
    flechaY = posY - (Math.cos(135 * (Math.PI / 180) - alfa) * h)
    ctx.lineTo(flechaX, flechaY)
    ctx.stroke()
  }
}
