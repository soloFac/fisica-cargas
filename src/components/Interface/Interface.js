import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Form from './Form'
import InfoCarga from './InfoCarga'
import Resultados from './Resultados'
import { InfoCampoElectrico } from './InfoCampoElectrico'

const Interface = ({ cargas, setCargas, setVectors, calculoF, setCalculoF, calculoE, setCalculoE, campoElectrico }) => {
  useEffect(() => {
    if (calculoF === true) {
      setVectors()
      setCalculoE(false)
    }
  }, [calculoF, cargas])

  const [showForm, setShowForm] = useState(false)

  return (
    // Esta interfaz va a contener el formulario,
    // Todas las cajas con los datos de las cargas
    // Los datos del calculo de la fuerza, campo electrico y potencial
    <Container
    >
      <Botones>

        { (calculoF === true)
          ? <>
            <CalcularCampo
              onClick={() => { setCalculoE(true); setCalculoF(false) }}
            >
          Calcular Campo Electrico
            </CalcularCampo>

          </>
          : <CalcularFuerzaBtn
            onClick={() => setCalculoF(true)}
          >
        Calcular Fuerza
          </CalcularFuerzaBtn>}
      </Botones>

      { (calculoF === false && calculoE === true)
        ? <InfoCampoElectrico
          campoElectrico={campoElectrico}
        />
        : null}

      <ContainerForm>
        {showForm
          ? <Form
            cargas={cargas}
            setCargas={setCargas}
            setShowForm={setShowForm}
          />
          : <AgregarCarga
            onClick={() => setShowForm(true)}
          >
          Agregar Carga
          </AgregarCarga>
        }
      </ContainerForm>

      <InfoCarga
        cargas={cargas}
        setCargas={setCargas}
        setVectors={setVectors}
      />

    </Container>
  )
}

const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  background-color: #00529D;
`

const AgregarCarga = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  place-content: center;
  width: 140px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #74ABFF;
  border: 1px solid #00529D;
  border-radius: 20px;
  color: white;
  box-shadow: 4px 4px 3px black;
`

const Botones = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1C4AA6;
  border: 5px solid #173E8C;
`

const CalcularFuerzaBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  place-content: center;
  width: 150px;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #74ABFF;
  border: 1px solid #00529D;
  border-radius: 30px;
  color: white;
  font-size: 15px;
  text-shadow: 2px 2px 3px rgba(0,0,0,0.8);
  `

const CalcularCampo = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  place-content: center;
  width: 160px;
  height: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #74ABFF;
  border: 1px solid #00529D;
  border-radius: 30px;
  color: white;
  font-size: 15px;
  text-shadow: 2px 2px 3px rgba(0,0,0,0.8);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  background-color: beige;
`

export default Interface
