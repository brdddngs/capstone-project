import React from 'react'
import styled from 'styled-components/macro'

export default function Ingredients({ amount, unit, ingredientItem }) {
  return (
    <IngredientsWrapper>
      <p>
        {amount} {unit}
      </p>
      <p>{ingredientItem}</p>
    </IngredientsWrapper>
  )
}

const IngredientsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
