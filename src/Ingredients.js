import React from 'react'
import styled from 'styled-components/macro'

export default function Ingredients({ amount, unit, ingredientItem }) {
  return (
    <IngredientsWrapper>
      <Item>
        {amount} {unit}
      </Item>
      <Item>{ingredientItem}</Item>
    </IngredientsWrapper>
  )
}

const IngredientsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const Item = styled.p`
  margin: 3px 6px;
  &:first-child {
    text-align: right;
  }
`
