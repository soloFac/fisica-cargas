import React, { useState } from 'react'

const Form = () => {
  const [carga, setCarga] = useState({
    signo: 'positiva',
    size: '',
    pos: {
      x: '',
      y: ''
    }
  })

  const { signo } = carga

  const getData = (e) => {
    setCarga({
      ...carga,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div>
        <label>Valor</label>
        <input
          type='number'
          name='valor'
          onChange={getData}
        ></input>
      </div>

      <div>
        <label>Orden de Magnitud</label>
        <input
          type='number'
          name='orden'
          onChange={getData}
        ></input>
      </div>

      <div>
        <label>Signo</label>
        <select
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
        </select>
      </div>
    </form>

  )
}

export default Form
