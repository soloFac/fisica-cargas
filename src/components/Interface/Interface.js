import React from 'react'
import Form from './Form'
import InfoCarga from './InfoCarga'

const Interface = () => {
  return (
    // Esta interfaz va a contener el formulario,
    // Todas las cajas con los datos de las cargas
    // Los datos del calculo de la fuerza, campo electrico y potencial
    <>
      <Form />
      <InfoCarga/>
    </>
  )
}

export default Interface
