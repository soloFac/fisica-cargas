import React from 'react'
import './Layout.css'

const Carga = ({ carga, changePosition }) => {
  const { size, pos, signo } = carga
  const { x, y } = pos
  const imagen = require(`./../../img/${signo}.png`)

  return (
    <img
      id={carga.id}
      draggable='true'
      src={imagen}
      onDragEnd={(e) => changePosition(e, carga)}
      style={{
        width: `${size}px`,
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`
      }}
    />
  )
}

export default Carga
