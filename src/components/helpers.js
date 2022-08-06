export const calcDistancia = (x, y) => {
  // const centerX = Math.round(window.innerWidth / 2)
  // const centerY = Math.round(window.innerHeight / 2)
  // const distX = x - centerX
  // const distY = y - centerY
  // return Math.sqrt(distX ** 2 + distY ** 2)
  return Math.sqrt(x ** 2 + y ** 2)
}

// Me permite calcular la fuerza entre un par de cargas
export const calcMagnitudFuerza = (q1, q2, d) => {
  // Constante de Fuerza
  const k = 8.987551787368176 * 10 ** 9
  return ((k * Math.abs(q1 * q2)) / (d ** 2))
}

// Todavia no esta finalizado
export const calcFuerzaVectorial = (q1, q2) => {
  const { distX, distY } = Distancias(q1, q2)
  const F = calcMagnitudFuerza(q1, q2, calcDistancia)
  // Calculo el angulo
  const alfa = Math.atan(distY / distX)
  const Fx = F * Math.cos(alfa)
  const Fy = F * Math.sin(alfa)
  return [Fx, Fy]
}

// export const CampoElectrico = (cargas, punto) => {

// }

// Retorna la distancias como un arreglo de elementos
// Obtengo la distancia entre las cargas, x e y
export const Distancias = (q1, q2) => {
  const distX = q1.pos.x - q2.pos.x
  const distY = q1.pos.y - q2.pos.y

  return [distX, distY]
}

function ordernarId (a, b) {
  if (a.id > b.id) {
    return 1
  }
  if (a.id < b.id) {
    return -1
  }
  return 0
}

// Esta función me sirve para realizar el ordenamiento de las cargas, es decir mantener el orden en que fueron añadidas
export const setCharge = (carga, setCargas) => {
  setCargas((prevState) => {
    const cargas = prevState.filter(c => ((c.id !== carga.id) ? c : null))
    cargas.push(carga)
    cargas.sort(ordernarId)
    return (cargas)
  })
  console.log(carga)
}

// POSICIONO EL ELEMENTO EN EL CENTRO - Sin utilización ACTUALMENTE
export const centerElement = (element, centerX, centerY) => {
  element.style.left = centerX + 'px'
  element.style.top = centerY + 'px'
}
