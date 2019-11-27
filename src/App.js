import React from 'react'
import styled from 'styled-components/macro'
import './styles.scss'
import Recipe from './Recipe'
import recipesData from './recipes.json'
import Grid from './Grid'
import Header from './Header'
import Pagetitle from './Pagetitle'

export default function App() {
  return (
    <>
      <Grid>
        <Header>
          <Pagetitle>Cookbook</Pagetitle>
          <img src={require('./assets/search.svg')} alt="search" />
        </Header>
        <ContentContainer>
          {recipesData.map((recipe, index) => (
            <Recipe key={index} {...recipe} />
          ))}
        </ContentContainer>
      </Grid>
    </>
  )
}

const ContentContainer = styled.section`
  padding: 20px;
  margin: 0 auto;
`
