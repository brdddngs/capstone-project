import React from 'react'
import styled from 'styled-components/macro'

export default function Tile({ title, image }) {
  return (
    <Wrapper>
      <TileTitle>{title}</TileTitle>
      <TileGradient />
      <TileImage src={image} alt={title} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: rgb(226, 148, 19);
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
  height: 100%;
  object-fit: cover;
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
