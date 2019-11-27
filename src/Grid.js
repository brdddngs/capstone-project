import React from 'react'
import styled from 'styled-components/macro'

export default function Grid({ children }) {
  return <GridStyled>{children}</GridStyled>
}

const GridStyled = styled.section`
  display: grid;
  grid-template-rows: 56px auto;
  height: 100vh;
`
