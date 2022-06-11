import React from 'react'
import styled from '@emotion/styled'

import Form from './Form'
import InfoCarga from './InfoCarga'

const Interface = ({ cargas, setCargas }) => {
  return (
    // Esta interfaz va a contener el formulario,
    // Todas las cajas con los datos de las cargas
    // Los datos del calculo de la fuerza, campo electrico y potencial
    <Container>
      <Form
        cargas={cargas}
        setCargas={setCargas}
      />
      <InfoCarga
        cargas={cargas}
        setCargas={setCargas}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default Interface
