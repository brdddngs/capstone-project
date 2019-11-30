import React from 'react'
import styled from 'styled-components/macro'
import OverviewNav from './OverviewNav'
import RecipeTile from './RecipeTile'
import OverviewTitle from './OverviewTitle'

export default function Overview({ recipesData }) {
  return (
    <>
      <OverviewNav>
        <OverviewTitle>Cookbook</OverviewTitle>
        <img src={require('./assets/search.svg')} alt="search" />
      </OverviewNav>
      <TileContainer>
        {recipesData.map(recipe => (
          <RecipeTile key={recipe.id} {...recipe} />
        ))}
      </TileContainer>
    </>
  )
}

const TileContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 56px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 160px);
  grid-template-rows: repeat(2, 160px);
  justify-content: center;
  gap: 10px;
  background-color: #fff;
`
