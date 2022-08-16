import React from 'react'
import styled from '@emotion/styled'
import { getScientificNot } from '../helpers'

export const InfoCampoElectrico = ({ campoElectrico, position }) => {
  const [Ex, PEx] = getScientificNot(campoElectrico.Ex)
  const [Ey, PEy] = getScientificNot(campoElectrico.Ey)
  const { x, y } = position
  return (
    <CampoElectricoContainer
    >
      <p>Campo Electrico:</p>
      <Position>
        <p>x: {x} px</p>
        <p>y: {y} px</p>
      </Position>
      <Vectores>
        <p>Ex: {Ex} <Potencia>.10<span>{Number(PEx)}</span></Potencia>N/C</p>
        <p>Ey: {Ey} <Potencia>.10<span>{Number(PEy)}</span></Potencia>N/C</p>
      </Vectores>
    </CampoElectricoContainer>
  )
}

const Position = styled.div`
  display: flex;
  flex-direction: row;
`

const Potencia = styled.div`
  position: relative;
  width: 35px;
  margin-left: 2px;
  margin-right: 4px;
  span{
    font-size: small;
    position: absolute;
    top: 0;
    width: min-content;

  }
`

const CampoElectricoContainer = styled.div`
  text-shadow: 2px 2px 7px rgba(255,255,255,0.82);
  border: 5px solid #1C4AA6;
  height: min-content;
  background-color: #173E8C;
  color: white;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    margin-left: 10px;
    margin-bottom: 10px;
  }
  `
const Vectores = styled.div`
  display: flex;
  flex-direction: column;
  
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  p{    
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    margin-bottom: 10px;
  }
`
