import React from 'react'
import { drawVector } from '../arrow'

// La utilización de malas prácticas no esta justificada, pero se debe a falta de tiempo en este caso
const Calcular = ({ cargas }) => {
  const dibujarVectores = () => {
    drawVector()
  }

  return (
    <>
      <button
        onClick={dibujarVectores}
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

export default Calcular
