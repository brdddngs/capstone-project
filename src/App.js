import React from 'react'
import styled from 'styled-components/macro'
import './styles.scss'
import recipesData from './recipes.json'
import Grid from './Grid'
import Header from './Header'
import Pagetitle from './Pagetitle'
import RecipeTile from './RecipeTile'

export default function App() {
  return (
    <>
      <Grid>
        <Header>
          <Pagetitle>Cookbook</Pagetitle>
          <img src={require('./assets/search.svg')} alt="search" />
        </Header>
        <TileContainer>
          {recipesData.map((recipe, index) => (
            <RecipeTile key={index} {...recipe} />
          ))}
        </TileContainer>
      </Grid>
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
  justify-content: center;
  gap: 10px;
`
