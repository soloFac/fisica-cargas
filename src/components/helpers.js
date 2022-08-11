import { cleanCanvas, Grilla } from './Layout/Grilla'

export const calcHipotenusa = (x, y) => {
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
  // console.log('---fuerza--- ', fuerza)
  return fuerza
}

// Retorna la distancias como un arreglo de elementos
// Obtengo la distancia entre las cargas, x e y
export const Distancias = (c1, c2) => {
  const distX = c1.x - c2.x
  const distY = c1.y - c2.y

  return [distX, distY]
}

// Todavia no esta finalizado
export const calcVectoresF = (c1, c2) => {
  const [distX, distY] = Distancias(c1.pos, c2.pos)
  const F = calcMagnitudFuerza(c1, c2, calcHipotenusa(Math.abs(distX), Math.abs(distY)))
  // Calculo el angulo
  const alfa = Math.atan(distY / distX)
  let Fx = F * Math.abs(Math.cos(alfa))
  let Fy = F * Math.abs(Math.sin(alfa))

  // console.log('Fx: ', Fx, ' Fy: ', Fy)
  // console.log('distX: ', distX, 'distY: ', distY)
  // Determino el signo de Fx y Fy
  if (c1.signo === c2.signo) {
    if (distX < 0 && distY < 0) {
      Fx = -1 * Fx
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

export default function ordernarId (a, b) {
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

const calcMagnitudCampo = (c, r) => {
  const k = 8.987551787368176 * 10 ** 9
  const E = (k * Math.abs(c.valor) * (10 ** (c.potencia))) / (r ** 2)
  return E
}

export const calcElectricFieldVector = (cargas, d) => {
  cleanCanvas()

  Grilla(window.innerWidth * 0.7, window.innerHeight, 30)

  // const { x, y } = d
  let ExAux = 0
  let EyAux = 0

  cargas.forEach(c => {
    // Calculo la distancia entre cada par de cargas, con el punto en el que quiero calcular el campo
    const [distX, distY] = Distancias(c.pos, d)
    // console.log(distX, distY)
    // Luego obtengo la hipotenusa de la misma para calcula la magnitud del campo
    const r = calcHipotenusa(distX, distY)

    const E = calcMagnitudCampo(c, r)

    // Calculo el angulo
    const alfa = Math.atan(distY / distX)
    let Ex = E * Math.abs(Math.cos(alfa))
    let Ey = E * Math.abs(Math.sin(alfa))

    if (c.signo === 'positiva') {
      if (distX < 0 && distY < 0) {
        Ex = -1 * Ex
      } else if (distX < 0 && distY > 0) {
        Ex = -1 * Ex
        Ey = -1 * Ey
      } else if (distX > 0 && distY > 0) {
        Ey = -1 * Ey
      }
    } else {
      if (distX < 0 && distY < 0) {
        Ey = -1 * Ey
      } else if (distX > 0 && distY < 0) {
        Ex = -1 * Ex
        Ey = -1 * Ey
      } else if (distX > 0 && distY > 0) {
        Ex = -1 * Ex
      }
    }

    ExAux = ExAux + Ex
    EyAux = EyAux + Ey
  })

  console.log('Auxiliares', ExAux, EyAux)
  // return E
  return [ExAux * -1, EyAux]
}

export const getScientificNot = (valor) => {
  const exp = valor.toExponential(2)

  if (exp.includes('e')) {
    return [exp.split('e')[0], exp.split('e')[1]]
  }
}
