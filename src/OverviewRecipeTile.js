import React from 'react'
import styled from 'styled-components/macro'
import RecipeTileTitle from './OverviewRecipeTileTitle'
import RecipeTileGradient from './OverviewRecipeTileGradient'

export default function RecipeTile({ title, image }) {
  return (
    <RecipeTileStyled>
      <RecipeTileTitle>{title}</RecipeTileTitle>
      <RecipeTileImage src={require(`./assets/img/${image}`)} alt={title} />
      <RecipeTileGradient />
    </RecipeTileStyled>
  )
}

const RecipeTileStyled = styled.section`
  position: relative;
  min-width: 160px;
  max-height: 160px;
`
const RecipeTileImage = styled.img`
  width: 100%;
`
