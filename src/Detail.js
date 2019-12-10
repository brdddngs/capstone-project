import React from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import DetailContent from './DetailContent'
import DetailImage from './DetailImage'
import DetailNav from './DetailNav'

export default function Detail({
  title,
  steps,
  ingredients,
  image,
  selectedRecipe,
}) {
  return (
    <Grid>
      <DetailNav />
      <Container>
        <DetailImage title={title} image={image} />
        <DetailContent
          title={title}
          steps={steps}
          ingredients={ingredients}
          image={image}
        />
      </Container>
    </Grid>
  )
}

const Container = styled.section`
  width: 100%;
`
