import React from 'react'
import styled from 'styled-components/macro'
import Nav from './OverviewNav'
import Tile from './OverviewTile'
import { Link } from 'react-router-dom'

export default function Overview({ recipes }) {
  return (
    <>
      <Nav pageTitle="Cookbook" />
      <TileContainer>
        {recipes.map(recipe => (
          <Link to={`/detail/${recipe.id}`} key={recipe.id}>
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
  padding: 10px 20px 66px;
  display: grid;
  grid-template-columns: repeat(2, 160px);
  grid-template-rows: repeat(2, 160px);
  justify-content: center;
  gap: 12px;
  background-color: #fff;
`
