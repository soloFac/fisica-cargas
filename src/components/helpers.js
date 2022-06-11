
export const calcDistancia = (x, y) => {
  const centerX = Math.round(window.innerWidth / 2)
  const centerY = Math.round(window.innerHeight / 2)
  const distX = x - centerX
  const distY = y - centerY
  return Math.sqrt(distX ** 2 + distY ** 2)
}

export const calcFuerza = (q1, q2, d) => {
  // Constante de Fuerza
  const k = 8.987551787368176 * 10 ** 9
  return ((k * Math.abs(q1 * q2)) / d ** 2)
}

// POSICIONO EL ELEMENTO EN EL CENTRO
export const centerElement = (element, centerX, centerY) => {
  element.style.left = centerX + 'px'
  element.style.top = centerY + 'px'
}

// export const CampoElectrico = (cargas, punto) => {

// }

// export const Distancia = (q1, q2) => {

// }

function ordernarId (a, b) {
  if (a.id > b.id) {
    return 1
  }
  if (a.id < b.id) {
    return -1
  }
  return 0
}

export const setCharge = (carga, setCargas) => {
  setCargas((prevState) => {
    const cargas = prevState.filter(c => ((c.id !== carga.id) ? c : null))
    cargas.push(carga)
    cargas.sort(ordernarId)
    return (cargas)
  })
  console.log(carga)
}
