import React from 'react'
import styled from 'styled-components/macro'

export default function Tile({ title, image }) {
  return (
    <Wrapper>
      <TileTitle>{title}</TileTitle>
      <TileGradient />
      <TileImage src={require(`./assets/img/${image}`)} alt={title} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  min-width: 160px;
  max-height: 160px;
`

const TileGradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`
const TileImage = styled.img`
  width: 100%;
`
const TileTitle = styled.h2`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  padding: 0 10px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: #f2f2f2;
`
