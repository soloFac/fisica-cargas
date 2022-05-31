import React from 'react'

// Este sera un componente que contendra la informacion de las cargas para ser mostrada en Interface
const InfoCarga = ({ cargas }) => {
  return (
    <div>
      {cargas.map(carga => {
        return (
          <div key={carga.id}>
            <h3>Carga: {carga.id}</h3>
            <div>
              <p>Pos x: <span>{carga.pos.x}</span></p>
              <p>Pos y: <span>{carga.pos.y}</span></p>
            </div>
            <p>Valor: <span>{carga.valor}</span></p>
            <div>
              <img className=''></img>
              <img className=''></img>
            </div>
          </div>)
      })}
    </div>
  )
}

export default InfoCarga
