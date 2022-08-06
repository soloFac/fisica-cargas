import React from 'react'
import styled from '@emotion/styled'

import Form from './Form'
import InfoCarga from './InfoCarga'
import Resultados from './Resultados'
import Calcular from './Calcular'
import { drawVector } from '../arrow'

const Interface = ({ cargas, setCargas }) => {
  const dibujarVectores = () => {
    drawVector()
  }

  return (
    // Esta interfaz va a contener el formulario,
    // Todas las cajas con los datos de las cargas
    // Los datos del calculo de la fuerza, campo electrico y potencial
    <Container onLoad={dibujarVectores}>
      <Form
        cargas={cargas}
        setCargas={setCargas}
      />
      <InfoCarga
        cargas={cargas}
        setCargas={setCargas}
      />

      <Resultados

      />

      <Calcular
        cargas={cargas}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: beige;
`

export default Interface
