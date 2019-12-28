import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import search from './assets/search.svg'
import Grid from './Grid'

export default function Overview({ recipes, headline }) {
  return (
    <Grid>
      <Header>
        <Headline>{headline}</Headline>
        <SearchIcon htmlFor="search">
          <img src={search} alt="search" />
        </SearchIcon>
        <SearchBar id="search"></SearchBar>
      </Header>
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
    </Grid>
  )
}

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 14px 20px 0;
  background-color: #fff;
  &::after {
    content: '';
    height: 11px;
    width: 100%;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
    position: absolute;
    bottom: -10px;
    left: 0;
    z-index: 2;
  }
`

const Headline = styled.h1`
  font-size: 1.67rem;
  font-weight: 700;
  margin: 0;
`

const SearchIcon = styled.label`
  position: absolute;
  right: 20px;
  height: 24px;
  background-color: sandybrown;
`

const SearchBar = styled.input`
  background-color: #fff;
  display: none;
`

const TileContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
