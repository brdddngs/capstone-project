import React, { useState } from 'react'
import Form from './Form'
import styled from 'styled-components/macro'
import Grid from './Grid'
import close from './assets/close.svg'
import { Link } from 'react-router-dom'

export default function NewRecipe({ headline, onSubmit }) {
  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([
    { ingredientItem: '', amount: '', unit: '' },
  ])

  return (
    <Grid>
      <Nav>
        <Link to="/">
          <img src={close} alt="close" />
        </Link>
      </Nav>

      <Form
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
        buttonText="Rezept hinzufügen"
        action="/"
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
