export const calcDistancia = (x, y) => {
  // const centerX = Math.round(window.innerWidth / 2)
  // const centerY = Math.round(window.innerHeight / 2)
  // const distX = x - centerX
  // const distY = y - centerY
  // return Math.sqrt(distX ** 2 + distY ** 2)
  return Math.sqrt(x ** 2 + y ** 2)
}

// Me permite calcular la fuerza entre un par de cargas
export const calcMagnitudFuerza = (c1, c2, d) => {
  const q1 = c1.valor
  const q2 = c2.valor

  const potq1 = c1.potencia
  const potq2 = c2.potencia
  // Constante de Fuerza
  const k = 8.987551787368176 * 10 ** 9
  const fuerza = (k * Math.abs(q1 * q2) * (10 ** (potq1 + potq2))) / (d ** 2)
  console.log('---fuerza--- ', fuerza)
  return fuerza
}

// Retorna la distancias como un arreglo de elementos
// Obtengo la distancia entre las cargas, x e y
export const Distancias = (c1, c2) => {
  const distX = c1.pos.x - c2.pos.x
  const distY = c1.pos.y - c2.pos.y

  return [distX, distY]
}

// Todavia no esta finalizado
export const calcVectoresF = (c1, c2) => {
  const [distX, distY] = Distancias(c1, c2)
  const F = calcMagnitudFuerza(c1, c2, calcDistancia(Math.abs(distX), Math.abs(distY)))
  console.log('Valor de F: ', F)
  // Calculo el angulo
  const alfa = Math.atan(distY / distX)
  let Fx = F * Math.abs(Math.cos(alfa))
  let Fy = F * Math.abs(Math.sin(alfa))

  console.log('Fx: ', Fx, ' Fy: ', Fy)
  console.log('distX: ', distX, 'distY: ', distY)
  // Determino el signo de Fx y Fy
  if (c1.signo === c2.signo) {
    if (distX < 0 && distY < 0) {
      Fx = -1 * Fx
      console.log('cambio fx: ', Fx)
    } else if (distX < 0 && distY > 0) {
      Fx = -1 * Fx
      Fy = -1 * Fy
    } else if (distX > 0 && distY > 0) {
      Fy = -1 * Fy
    }
  } else {
    if (distX < 0 && distY < 0) {
      Fy = -1 * Fy
    } else if (distX > 0 && distY < 0) {
      Fx = -1 * Fx
      Fy = -1 * Fy
    } else if (distX > 0 && distY > 0) {
      Fx = -1 * Fx
    }
  }

  // retorno solamente la Fx y Fy de q1
  return [Fx, Fy]
}

// export const CampoElectrico = (cargas, punto) => {

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
