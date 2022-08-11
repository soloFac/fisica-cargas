import React, { useState } from 'react'
import styled from '@emotion/styled'

const Form = ({ cargas, setCargas }) => {
  const getLastId = () => {
    if (cargas.length === 0) {
      return 1
    } else {
      return cargas[cargas.length - 1]?.id + 1
    }
  }

  console.log(getLastId())

  const [carga, setCarga] = useState({
    id: '',
    signo: 'positiva',
    valor: '',
    potencia: '',
    size: '15',
    pos: {
      x: '0',
      y: '0'
    },
    f: {
      x: 0,
      y: 0
    }
  })

  const { signo, valor, potencia } = carga

  const getData = ({ target }) => {
    if (target.name === 'potencia' || target.name === 'valor') {
      setCarga({
        ...carga,
        [target.name]: Number(target.value)
      })
    } else {
      setCarga({
        ...carga,
        [target.name]: target.value
      })
    }
  }

  // Validar Campos vacios
  const agregarCarga = e => {
    e.preventDefault()

    // carga.id = uuid()
    carga.id = getLastId()
    if (carga.id === '') console.log('El id de la carga no puede estar vacio. Comuniquese con el administrador')

    if (carga.valor === '' || carga.potencia === '' || carga.signo === '') {
      alert('Ningun campo puede estar vacio')
      return null
    }

    setCargas((prevState) => {
      console.log(prevState)
      return [
        ...prevState,
        carga
      ]
    })

    // Reseteo el estado del Formulario
    setCarga({
      id: '',
      signo: 'positiva',
      valor: '',
      potencia: '',
      size: '15',
      pos: {
        x: '0',
        y: '0'
      },
      f: {
        x: 25,
        y: 26
      }
    })
  }

  return (
    <Formulario
      onSubmit={e => agregarCarga(e)}
    >
      <Valor>
        <label>Valor</label>
        <Input
          type='number'
          name='valor'
          value={valor}
          onChange={getData}
        />
      </Valor>

      <Magnitud>
        <label>Orden de Magnitud</label>
        <Input
          type='number'
          name='potencia'
          value={potencia}
          onChange={getData}
        />
      </Magnitud>

      <Signo>
        <label>Signo</label>
        <Select
          name='signo'
          value={signo}
          onChange={getData}
        >
          <option
            value='positiva'
          >
            positiva
          </option>
          <option
            value='negativa'
          >
            negativa
          </option>
        </Select>
      </Signo>

      <Agregar>Agregar Carga</Agregar>
    </Formulario>

  )
}

const Agregar = styled.button`
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
`

const Valor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Magnitud = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Signo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.form`
  border: 5px solid #00599D;
  background-color: #00529D;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Georgia, Times, 'Times New Roman', serif;
  font-size: 0.7em;
  /* width: '100%'; */
  /* display: 'flex'; */
  /* flex-direction: 'row'; */
`

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #D8EBFC;
  border: 1px solid #00529D;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 5px;
  /* border: 1px solid rgb(146, 146, 146); */
  /* border-radius: 10px; */
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`
const Select = styled.select`
   padding: .2em;
  font-size:  1em;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`

export default Form
