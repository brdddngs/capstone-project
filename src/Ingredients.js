import React from 'react'
import styled from 'styled-components/macro'

export default function Ingredients({ amount, unit, ingredientItem }) {
  return (
    <Wrapper>
      <Item>
        {amount} {unit}
      </Item>
      <Item>{ingredientItem}</Item>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const Item = styled.p`
  margin: 3px 6px;
  &:first-child {
    text-align: right;
  }
`
