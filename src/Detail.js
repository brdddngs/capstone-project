import React from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import RecipeDetailNav from './RecipeDetailNav'
import RecipeDetail from './RecipeDetail'
import { Link } from 'react-router-dom'

export default function Detail({ title, steps, ingredients, image }) {
  return (
    <>
      <Grid>
        <RecipeDetailNav>
          <Link to="/">
            <img src={require('./assets/arrow_back.svg')} alt="back" />
          </Link>
        </RecipeDetailNav>
        <Container>
          <RecipeDetail
            title={title}
            steps={steps}
            ingredients={ingredients}
            image={image}
          />
        </Container>
      </Grid>
    </>
  )
}
const Container = styled.section`
  width: 100%;
  background-color: #fff;
`
