
import React from 'react'

// Dibujar un triangulo
export const drawVector = (c1, Fx1, Fy1) => { // Deberia recibir un factor de conversion para normalizar los vectores
  const canvas = document.querySelector('#linea')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    // este sera el largo o alto definido para cada linea de la flecha

    // el ancho de cada imagen de la carga es de 15px

    const pos0X = c1.pos.x + 7.5
    const pos0Y = c1.pos.y + 7.5

    // Realizo un escalamiento para que puedan verse los vectores
    const Fx = Fx1 * (10 ** 6)
    const Fy = Fy1 * (10 ** 6) * -1
    console.log(Fx, Fy)

    const posX = pos0X + Fx
    const posY = pos0Y + Fy

    const h = 15

    const alfa = Math.atan(Fy / Fx)
    // console.log('fx, fy: ', Fx, Fy)
    // console.log('alfa en radianes: ', alfa)
    // console.log('alfa en grados: ', alfa * (180 / Math.PI))

    // Draw the line - arrow body
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'white'
    ctx.moveTo(pos0X, pos0Y)
    ctx.lineTo(posX, posY)
    ctx.stroke()

    // En el caso en que la posX era mayor a la posicion inicial, la felcha ser invertia,
    // por lo tanto le sumo 180° al angulo para solucionarlo
    let anguloAux = 0
    if (posX < pos0X) {
      anguloAux = 180
    }

    let flechaX
    let flechaY

    // curve top arrow
    ctx.beginPath()
    ctx.moveTo(posX, posY)
    ctx.strokeStyle = 'white'
    flechaX = posX - (Math.sin((45 + anguloAux) * (Math.PI / 180) - alfa) * h)
    flechaY = posY - (Math.cos((45 + anguloAux) * (Math.PI / 180) - alfa) * h)
    ctx.lineTo(flechaX, flechaY)
    ctx.stroke()

    // curve bottom arrow
    ctx.beginPath()
    ctx.moveTo(posX, posY)
    ctx.strokeStyle = 'white'
    flechaX = posX - (Math.sin((135 + anguloAux) * (Math.PI / 180) - alfa) * h)
    flechaY = posY - (Math.cos((135 + anguloAux) * (Math.PI / 180) - alfa) * h)
    ctx.lineTo(flechaX, flechaY)
    ctx.stroke()
  }
}

export const drawVectorE = (pos, Ex1, Ey1) => { // Deberia recibir un factor de conversion para normalizar los vectores
  const canvas = document.querySelector('#linea')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    // este sera el largo o alto definido para cada linea de la flecha

    // el ancho de cada imagen de la carga es de 15px
    const pos0X = pos.x + 7.5
    const pos0Y = pos.y + 7.5

    // Realizo un escalamiento para que puedan verse los vectores
    const Ex = Ex1 * (10 ** 1)
    const Ey = Ey1 * (10 ** 1)
    console.log(Ex, Ey)

    const posX = pos0X + Ex
    const posY = pos0Y + Ey

    const h = 15

    const alfa = Math.atan(Ey / Ex)
    // console.log('Ex, Ey: ', Ex, Fy)
    // console.log('alfa en radianes: ', alfa)
    // console.log('alfa en grados: ', alfa * (180 / Math.PI))

    // Draw the line - arrow body
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'white'
    ctx.moveTo(pos0X, pos0Y)
    ctx.lineTo(posX, posY)
    ctx.stroke()

    // En el caso en que la posX era mayor a la posicion inicial, la felcha ser invertia,
    // por lo tanto le sumo 180° al angulo para solucionarlo
    let anguloAux = 0
    if (posX < pos0X) {
      anguloAux = 180
    }

    let flechaX
    let flechaY

    // curve top arrow
    ctx.beginPath()
    ctx.moveTo(posX, posY)
    ctx.strokeStyle = 'white'
    flechaX = posX - (Math.sin((45 + anguloAux) * (Math.PI / 180) - alfa) * h)
    flechaY = posY - (Math.cos((45 + anguloAux) * (Math.PI / 180) - alfa) * h)
    ctx.lineTo(flechaX, flechaY)
    ctx.stroke()

    // curve bottom arrow
    ctx.beginPath()
    ctx.moveTo(posX, posY)
    ctx.strokeStyle = 'white'
    flechaX = posX - (Math.sin((135 + anguloAux) * (Math.PI / 180) - alfa) * h)
    flechaY = posY - (Math.cos((135 + anguloAux) * (Math.PI / 180) - alfa) * h)
    ctx.lineTo(flechaX, flechaY)
    ctx.stroke()
  }
}
