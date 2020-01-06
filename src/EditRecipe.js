import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from './Form'

export default function EditRecipe({ headline, recipes, onSubmit }) {
  const { id } = useParams()
  const recipe = recipes.find(recipe => recipe.id === id)

  const [title, setTitle] = useState(recipe.title)
  const [steps, setSteps] = useState(recipe.steps)
  const [image, setImage] = useState(recipe.image)
  const [ingredients, setIngredients] = useState(recipe.ingredients)

  return (
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
      linkTo={`/detail/${id}`}
      action={`/detail/${id}`}
    />
  )
}
