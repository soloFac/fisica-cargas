import React, { useState } from 'react'
import styled from '@emotion/styled'
import { v4 as uuid } from 'uuid-sequential'

const Form = ({ setCargas }) => {
  const [carga, setCarga] = useState({
    id: '',
    signo: 'positiva',
    valor: '',
    potencia: '',
    size: '20',
    pos: {
      x: '0',
      y: '0'
    }
  })

  const { signo, valor, potencia } = carga

  const getData = ({ target }) => {
    setCarga({
      ...carga,
      [target.name]: target.value
    })
  }

  // Validar Campos vacios
  const agregarCarga = e => {
    e.preventDefault()

    carga.id = uuid()
    if (carga.id === '') console.log('El id de la carga no puede estar vacio. Comuniquese con el administrador')

    if (carga.valor === '' || carga.potencia === '' || carga.signo === '') {
      alert('Ningun campo puede ser vacio')
    }

    setCargas((prevState) => {
      console.log(prevState)
      return [
        ...prevState,
        carga
      ]
    })

    // Reseteo el estado
    setCarga({
      id: '',
      signo: 'positiva',
      valor: '',
      potencia: '',
      size: '20',
      pos: {
        x: '0',
        y: '0'
      }
    })
  }

  return (
    <Formulario
      onSubmit={e => agregarCarga(e)}
    >
      <div>
        <label>Valor</label>
        <Input
          type='number'
          name='valor'
          value={valor}
          onChange={getData}
        />
      </div>

      <div>
        <label>Orden de Magnitud</label>
        <Input
          type='number'
          name='potencia'
          value={potencia}
          onChange={getData}
        />
      </div>

      <div>
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
      </div>

      <button>Agregar Carga</button>
    </Formulario>

  )
}

const Formulario = styled.form`
  background-color: #1C4AA6;
  /* width: '100%'; */
  /* display: 'flex'; */
  /* flex-direction: 'row'; */
`

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(146, 146, 146);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`
const Select = styled.select`
   padding: .2em;
  font-size: 20px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`

export default Form
