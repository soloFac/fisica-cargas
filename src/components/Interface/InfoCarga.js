import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { deleteCharge, getScientificNot, setCharge } from '../helpers'

// Este sera un componente que contendra la informacion de las cargas para ser mostrada en Interface
const InfoCarga = ({ cargas, setCargas, cambio, setCambio }) => {
  // Cuando se realiza click sobre la carga, le cambio el signo
  const changeSign = (carga) => {
    // Si no esta activada la cambio
    const { signo } = carga
    if (signo === 'positiva') {
      carga.signo = 'negativa'
      setCharge(carga, setCargas)
    } else if (signo === 'negativa') {
      carga.signo = 'positiva'
      setCharge(carga, setCargas)
    }
    setCambio(cambio + 1)
  }

  const eliminarCarga = (id) => {
    deleteCharge(id, setCargas)
    setCambio(cambio + 1)
  }

  const imagenUrl = require('../../img/delete-icon.png')

  return (
    <Container>
      {cargas.map(carga => {
        console.log(carga.pos)
        const [Fx, PFx] = getScientificNot(carga.f.x)
        const [Fy, PFy] = getScientificNot(carga.f.y)

        return (
          <CargaContainer key={carga.id}>
            <Titulo>Carga: n°{carga.id}</Titulo>
            <Posicion>
              <p>Posx: <span>{carga.pos.x}px</span> <b>i</b></p>
              <p>Posy: <span>{carga.pos.y}px</span> <b>j</b></p>
            </Posicion>
            <Fuerza>
              <p>Fx: {Fx} <Potencia>.10<span>{Number(PFx)}</span></Potencia>i-N</p>

            </Fuerza>
            <Fuerza>
              <p>Fy: {Fy} <Potencia>.10<span>{Number(PFy)}</span></Potencia>j-N</p>
            </Fuerza>
            {/* valor podria ser un styled component, ya que contiene un numero como potencia */}
            <Carga><p>Valor: {carga.valor} <Potencia>.10<span>{carga.potencia}</span></Potencia>C</p></Carga>
            <CargasImagen>
              <CargaImg
                src={require(`./../../img/${carga.signo}.png`)}
                onClick={() => { changeSign(carga) }}
              />
            </CargasImagen>
            <EliminarCarga
              src={imagenUrl}
              onClick={() => eliminarCarga(carga.id)}
            />
          </CargaContainer>)
      })}
    </Container>
  )
}

export default InfoCarga

const EliminarCarga = styled.img`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  cursor: pointer;
`

const Titulo = styled.h3`
`

const CargaImg = styled.img`
  width: 30px;
`

const Posicion = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  font-size: large;
  align-self: flex-start;
  p{
    color: #2A5781;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    margin-left: 1em;
    width: 85px;
  }
  margin-bottom: 10px;
`

const Fuerza = styled.div`
  /* width: 100%; */
  p{
    display: flex;
    flex-direction: row;
    /* margin-top: 10px; */
    font-size: 20px;
    color: #2A5781;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  div{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #2A5781;
    span{
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      color: #2A5781;
    }
  }
`

const Potencia = styled.div`
  position: relative;
  width: 40px;
  margin-left: 2px;
  span{
    font-size: small;
    position: absolute;
    top: 0;
  }
`

const Carga = styled.div`
  
  margin-top: 5px;
  p{
    position: relative;
    display: flex;
    flex-direction: row;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
  }
`

const CargasImagen = styled.div`
  margin-top: 10px;
  .img-disable{
    filter: saturate(5%);
  }
`

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 85vh;
  background-color: #D8EBFC;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CargaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D8EBFC;
  color: lightcoral;
  width: 100%;
  border: 5px solid #ABD7FF;
  h3{
    color: #3C3C3C;
  }
  p{
    color: #2A5781;
    font-family: 'Jockey One';
    span{
      color: #3F3F3F;
      font-family: 'Heebo';
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`
