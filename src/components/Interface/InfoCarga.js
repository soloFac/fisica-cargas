import React from 'react'
import styled from '@emotion/styled'
import { setCharge } from '../helpers'

// Este sera un componente que contendra la informacion de las cargas para ser mostrada en Interface
const InfoCarga = ({ cargas, setCargas }) => {
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
        return (
          <CargaContainer key={carga.id}>
            <h3>Carga: {carga.id}</h3>
            <div>
              <p>Pos x: <span>{carga.pos.x}</span></p>
              <p>Pos y: <span>{carga.pos.y}</span></p>
            </div>
            {/* valor podria ser un styled component, ya que contiene un numero como potencia */}
            <p>Valor: <span>{carga.valor}</span></p>
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

const CargasImagen = styled.div`
  .img-disable{
    filter: saturate(5%);
  }
`

const Container = styled.div`
  overflow-y: scroll;
  height: 60vh;
  background-color: #D8EBFC;
`

const CargaContainer = styled.div`
  position: relative;
  background-color: #D8EBFC;
  color: lightcoral;
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
