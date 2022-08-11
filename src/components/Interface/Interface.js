import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Form from './Form'
import InfoCarga from './InfoCarga'
import Resultados from './Resultados'

const Interface = ({ cargas, setCargas, setVectors, calculoF, setCalculoF, calculoE, setCalculoE, campoElectrico }) => {
  useEffect(() => {
    if (calculoF === true) {
      setVectors()
    } else {
      // unsetVectors()
    }
  }, [calculoF, cargas])

  return (
    // Esta interfaz va a contener el formulario,
    // Todas las cajas con los datos de las cargas
    // Los datos del calculo de la fuerza, campo electrico y potencial
    <Container
    >
      <Form
        cargas={cargas}
        setCargas={setCargas}
      />
      <InfoCarga
        cargas={cargas}
        setCargas={setCargas}
        setVectors={setVectors}
      />

      <p
        style={{ color: 'black' }}
      >
        Campo Electrico:
        Ex: {campoElectrico.Ex}
        Ey: {campoElectrico.Ey}
      </p>

      <button
        onClick={() => setCalculoF(true)}
      >
        Calcular Fuerza
      </button>

      <button
        onClick={() => setCalculoE(true)}
      >
        Calcular Campo Electrico
      </button>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 100vh;
  background-color: beige;
`

export default Interface
