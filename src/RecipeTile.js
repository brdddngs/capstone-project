import React from 'react'
import styled from 'styled-components/macro'
import RecipeTileTitle from './RecipeTileTitle'
import RecipeTileImage from './RecipeTileImage'
import RecipeTileGradient from './RecipeTileGradient'

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