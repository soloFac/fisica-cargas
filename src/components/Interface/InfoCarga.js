import React from 'react'
import styled from '@emotion/styled'
import { getScientificNot, setCharge } from '../helpers'

// Este sera un componente que contendra la informacion de las cargas para ser mostrada en Interface
const InfoCarga = ({ cargas, setCargas }) => {
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
  }

  return (
    <Container>
      {cargas.map(carga => {
        console.log(carga.pos)
        const [Fx, PFx] = getScientificNot(carga.f.x)
        const [Fy, PFy] = getScientificNot(carga.f.y)

        return (
          <CargaContainer key={carga.id}>
            <h3>Carga: {carga.id}</h3>
            <Posicion>
              <p>x: <span>{carga.pos.x}</span> <b>i</b></p>
              <p>y: <span>{carga.pos.y}</span> <b>j</b></p>
            </Posicion>
            <Fuerza>
              <p>Fx: {Fx} 10<span>{Number(PFx)}</span></p><p>N</p>
            </Fuerza>
            <Fuerza>
              <p>Fy: {Fy} 10<span>{Number(PFy)}</span></p><p>N</p>
            </Fuerza>
            {/* valor podria ser un styled component, ya que contiene un numero como potencia */}
            <Carga>Carga: {carga.valor} 10<span>{carga.potencia}</span></Carga>
            <CargasImagen>
              <CargaImg
                src={require(`./../../img/${carga.signo}.png`)}
                onClick={() => changeSign(carga)}
              />
            </CargasImagen>
          </CargaContainer>)
      })}
    </Container>
  )
}

export default InfoCarga

const CargaImg = styled.img`
  width: 30px;
`

const Posicion = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  font-size: medium;
  p{
    width: 40%;
  }
`

const Fuerza = styled.p`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 20px;
  position: relative;
  p{
    width: 50%;
  }
  span{
    font-size: small;
    position: absolute;
    top: 0;
  }
`

const Carga = styled.p`
  position: relative;
  margin-top: 5px;
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
  height: 60vh;
  background-color: #D8EBFC;
  display: flex;
  flex-direction: row;
`

const CargaContainer = styled.div`
  position: relative;
  background-color: #D8EBFC;
  color: lightcoral;
  width: 50%;
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
