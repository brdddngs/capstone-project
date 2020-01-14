import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import search from './assets/search.svg'
import Grid from './Grid'
import defaultImg from './assets/img/default-img-overview2.jpg'

export default function Overview({ recipes, headline }) {
  const [inputSearchbar, setInputSearchbar] = useState('')
  const [recipesFiltered, setRecipesFiltered] = useState(recipes)

  useEffect(() => {
    setRecipesFiltered(
      recipes.filter(recipe => searchResult(recipe, inputSearchbar))
    )
  }, [inputSearchbar, recipes])

  return (
    <Grid>
      <Header>
        <Headline>{headline}</Headline>
        <SearchIcon htmlFor="search">
          <img src={search} alt="search" />
        </SearchIcon>
        <SearchBar
          onInput={event => setInputSearchbar(event.target.value)}
          id="search"
        ></SearchBar>
      </Header>
      <TileContainer>
        {recipesFiltered.map(recipe => (
          <Tile key={recipe.id}>
            <Link to={`/detail/${recipe.id}`}>
              <Title>{recipe.title}</Title>
              <Gradient />
              <Image src={recipe.image === '' ? defaultImg : recipe.image} />
            </Link>
          </Tile>
        ))}
      </TileContainer>
    </Grid>
  )

  function searchResult(recipe, inputSearchbar) {
    let input = inputSearchbar.toLowerCase()
    let title = recipe.title.toLowerCase()
    const letterList = title.split('')

    let searchIndex = 0

    letterList.forEach(letter => {
      if (letter === input[searchIndex]) {
        searchIndex += 1
        if (searchIndex >= input.length) {
          return false
        }
      }
    })

    if (searchIndex !== input.length) {
      return ''
    }
    return letterList.join('')
  }
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
  z-index: 2;
`

const SearchBar = styled.input`
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 20px;
  background-color: #fff;
  padding: 8px 6px;
  color: #313131;
  caret-color: #e29413;
  width: 0;
  z-index: 1;
  transition: width 0.2s ease-in;
  &:focus {
    width: calc(100% - 40px);
    border-bottom: 2px solid #e29413;
    transition: width 0.4s ease-in;
  }
`

const TileContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 10px 20px 0;
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 160px);
  grid-template-rows: repeat(2, 160px);
  justify-content: center;
  gap: 12px;
  background-color: #fff;
  &::after {
    content: '';
    height: 54px;
    width: 100%;
    bottom: -54px;
  }
`

const Tile = styled.section`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: rgb(226, 148, 19);
  &:last-of-type {
    margin-bottom: 20px;
  }
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
