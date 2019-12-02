import React from 'react'
import styled from 'styled-components/macro'
import Nav from './OverviewNav'
import Tile from './OverviewTile'
import { Link } from 'react-router-dom'

export default function Overview({ recipesData, handleRecipeClick }) {
  return (
    <>
      <Nav title="Cookbook" />
      <TileContainer>
        {recipesData.map((recipe, index) => (
          <Link
            to={`/detail/${recipe.title}`}
            key={recipe.id}
            onClick={() => handleRecipeClick(index)}
          >
            <Tile {...recipe} />
          </Link>
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
