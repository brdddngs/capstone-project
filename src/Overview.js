import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import search from './assets/search.svg'

export default function Overview({ recipes, headline }) {
  return (
    <>
      <Nav>
        <Headline>{headline}</Headline>
        <img src={search} alt="search" />
      </Nav>
      <TileContainer>
        {recipes.map(recipe => (
          <Link to={`/detail/${recipe.id}`} key={recipe.id}>
            <Tile>
              <Title>{recipe.title}</Title>
              <Gradient />
              <Image src={recipe.image} />
            </Tile>
          </Link>
        ))}
      </TileContainer>
    </>
  )
}

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 14px 20px 0;
  background-color: #fff;
  &::after {
    content: '';
    height: 10px;
    width: 100%;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`

const Headline = styled.h1`
  font-size: 1.67rem;
  font-weight: 700;
  margin: 0;
`

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
const Tile = styled.section`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: rgb(226, 148, 19);
`

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Title = styled.h2`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  padding: 0 10px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: #f2f2f2;
`
