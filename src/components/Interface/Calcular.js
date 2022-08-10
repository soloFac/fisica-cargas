import React from 'react'
import { drawVector } from '../arrow'
import { calcVectoresF } from '../helpers'

// La utilización de malas prácticas no esta justificada, pero se debe a falta de tiempo en este caso
// Este componente se encargara de calcular el par de fuerza vectoriales entre cada par de cargas,
// obteniendo asi la fuerza resultante para cada una
const CalcularFuerza = ({ cargas, setCargas }) => {
  // const dibujarVectores = () => {
  //   drawVector()
  // }

  const setearFuerzas = () => {
    const cargasAux = cargas.slice()
    console.log('cargas: ', cargasAux)
    let FxAux
    let FyAux
    // Voy a crear una copia por valor del arreglo
    // let carga
    for (let i = 0; i < cargas.length; i++) {
      FxAux = 0
      FyAux = 0
      // carga = cargas[i]
      // Declaro un par de variables auxiliares para realizar la sumatoria
      for (let j = i + 1; j < cargas.length; j++) {
        // if (j < cargas.length) { // Si no se salio del indice de arreglo de cargas
        const [Fx, Fy] = calcVectoresF(cargas[i], cargas[j])
        console.log('VALORES', i, j)
        cargasAux[j].f.x = cargasAux[j].f.x + (Fx * -1)
        cargasAux[j].f.y = cargasAux[j].f.y + (Fy * -1)
        // console.log('Fuerzas Retornadas; Fx: ', Fx, ' - Fy: ', Fy)
        // console.log('Valor del calculo: ', FxAux + Fx, FyAux + Fy)
        // calculo la fuerza entre el par de cargas
        FxAux = FxAux + Fx
        FyAux = FyAux + Fy
        // console.log('Fuerzas Calculadas; Fx: ', FxAux, ' - Fy: ', FyAux)
        // console.log('i: ', i, ' j: ', j)
        // drawVector(cargas[0], FxAux, FyAux)
      }
      cargasAux[i].f.x = FxAux
      cargasAux[i].f.y = FyAux
      console.log('cargasAux: Fx y Fy', cargasAux[i].f.x, cargasAux[i].f.y)
      // cargasAux.push(carga)
      // Seteo el valor de la fuerza para esa carga, calculada
      // setCargas
    }
    console.log(cargasAux)
  }

  return (
    <>
      <button
        onClick={() => setearFuerzas()}
      >
        Calcular Fuerza
      </button>
      {/* <button>
        Calcular Campo E
      </button>
      <button>
        Calcular Potencial
      </button> */}
    </>
  )
}

export default CalcularFuerza
