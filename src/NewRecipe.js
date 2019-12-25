import React, { useState } from 'react'
import Form from './Form'

export default function NewRecipe({ headline, onSubmit }) {
  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([
    { ingredientItem: '', amount: '', unit: '' },
  ])

  return (
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
      linkTo="/"
    />
  )
}
