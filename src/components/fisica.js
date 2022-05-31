// import { calcDistancia, calcFuerza, centerElement } from './helpers.js'

// export const fisica = () => {
//   // OBTENGO EL CENTRO DEL VP
//   const centerX = Math.floor(window.innerWidth / 2)
//   const centerY = Math.floor(window.innerHeight / 2)

//   // El innerWidth y el innerHeight cambiaran cuando se cambie el tamaño de la ventana
//   // ELEMENTO PRINCIPAL - TODA LA PAGINA
//   const principal = document.querySelector('html')

//   // OBTENGO MI ELEMENTO A POSICIONAR EN EL CENTRO
//   const imagen = document.querySelector('#imagen')
//   const linea = document.querySelector('#linea')

//   function getCenterX () {
//     return Math.floor(window.innerWidth / 2)
//   }
//   function getCenterY () {
//     return Math.floor(window.innerHeight / 2)
//   }

//   // CUANDO SE CARGUE POR PRIMERA VEZ EL NAVEGADOR CENTRO LOS ELEMENTOS
//   document.addEventListener('DOMContentLoaded', () => {
//   // centerElement(imagen, getCenterX(), getCenterY())
//   // centerElement(linea, getCenterX(), getCenterY())
//   })

//   // REGISTRO CAMBIOS EN EL TAMAÑO DEL VIEWPORT
//   window.addEventListener('resize', () => {
//   // centerElement(imagen, getCenterX(), getCenterY())
//   // centerElement(linea, getCenterX(), getCenterY())
//   })

//   // AL MOVER EL MOUSE REALIZO CIERTAS ACCIONES
//   principal.addEventListener('mousemove', e => {
//     console.log(e.x, e.y)
//     console.log(`medidas del viewport ${window.innerWidth}-${window.innerHeight}`)
//   })

//   // Defino mi Cuadricula
//   const espaciado = 30
//   const c = document.getElementById('linea')
//   const ctx = c.getContext('2d')
//   c.width = window.innerWidth
//   ctx.moveTo(540, 328)
//   ctx.lineTo(544, 100)
//   ctx.strokeStyle = '#ffffff'
//   ctx.stroke()

//   for (let x = 0; x <= 1360; x += espaciado) {
//     ctx.moveTo(x, 0)
//     ctx.lineTo(x, window.innerHeight)
//   }
//   for (let y = 0; y <= 700; y += espaciado) {
//     ctx.moveTo(0, y)
//     ctx.lineTo(window.innerWidth, y)
//   }

//   // ctx.strokeStyle = "#f00";
//   ctx.stroke()

//   // PRUEBA
//   principal.addEventListener('click', e => {
//     console.log('Se realizo un click')
//     const q1 = 6 * 10 ** (-9)
//     const q2 = 9 * 10 ** (-9)
//     const fuerza = calcFuerza(q1, q2)
//     console.log(calcDistancia(e.x, e.y))
//     console.log('centro = ' + getCenterX() + ', ' + getCenterY())

//     const c = document.getElementById('linea')
//     const ctx = c.getContext('2d')
//     c.width = window.innerWidth
//     // ctx.moveTo(540, 328);
//     ctx.moveTo(getCenterX(), getCenterY())
//     ctx.lineTo(e.x, e.y)
//     ctx.strokeStyle = '#ffffff'
//     ctx.stroke()
//   // window.alert('hola')
//   })

//   // mousedown
//   principal.addEventListener('mouseup', e => {
//     console.log('Se realizo un click')
//     const q1 = 6 * 10 ** (-9)
//     const q2 = 9 * 10 ** (-9)
//     const fuerza = calcFuerza(q1, q2)
//     console.log(calcDistancia(e.x, e.y))
//     console.log('centro = ' + getCenterX() + ', ' + getCenterY())

//     const c = document.getElementById('linea')
//     const ctx = c.getContext('2d')
//     c.width = window.innerWidth
//     // ctx.moveTo(540, 328);
//     ctx.moveTo(getCenterX(), getCenterY())
//     ctx.lineTo(e.x, e.y)
//     ctx.strokeStyle = '#ffffff'
//     ctx.stroke()
//   // window.alert('hola')
//   })

// $('html').mousemove(function(){
//     console.log('hola')
// })
// }
