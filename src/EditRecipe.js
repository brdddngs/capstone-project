import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Grid from './Grid'
import close from './assets/close.svg'
import { Link } from 'react-router-dom'

import Form from './Form'

export default function EditRecipe({ headline, recipes, onSubmit }) {
  const { id } = useParams()
  const recipe = recipes.find(recipe => recipe.id === id)

  const [title, setTitle] = useState(recipe.title)
  const [steps, setSteps] = useState(recipe.steps)
  const [image, setImage] = useState(recipe.image)
  const [ingredients, setIngredients] = useState(recipe.ingredients)

  return (
    <Grid>
      <Nav>
        <Link to={`/detail/${id}`}>
          <img src={close} alt="close" />
        </Link>
      </Nav>

      <Form
        id={id}
        title={title}
        steps={steps}
        image={image}
        ingredients={ingredients}
        onTitleChange={event => setTitle(event.target.value)}
        onStepsChange={event => setSteps(event.target.value)}
        onImageChange={image => setImage(image)}
        onIngredientsChange={setIngredients}
        headline={headline}
        onSubmit={onSubmit}
        buttonText="Rezept ändern"
        action={`/detail/${id}`}
      />
    </Grid>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
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
