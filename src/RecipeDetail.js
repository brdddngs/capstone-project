import React, { useState } from 'react'
import Ingredients from './Ingredients'
import RecipeDetailGradient from './RecipeDetailGradient'
import RecipeDetailContent from './RecipeDetailContent'
import RecipeDetailHeader from './RecipeDetailHeader'
import RecipeDetailTitle from './RecipeDetailTitle'
import RecipeDetailImg from './RecipeDetailImg'
import TabContainer from './TabContainer'
import Tab from './Tab'

export default function RecipeDetail({ title, steps, image, ingredients }) {
  const [showIngredients, setShowIngredients] = useState(true)
  const [showSteps, setShowSteps] = useState(false)

  return (
    <>
      <RecipeDetailHeader>
        <RecipeDetailTitle>{title}</RecipeDetailTitle>
        <RecipeDetailGradient></RecipeDetailGradient>
        <RecipeDetailImg src={require(`./assets/img/${image}`)} alt={title} />
      </RecipeDetailHeader>
      <RecipeDetailContent>
        <TabContainer>
          <Tab
            className={showIngredients ? 'active' : ''}
            onClick={() => ingredientsActive()}
          >
            Zutaten
          </Tab>
          <Tab
            className={showSteps ? 'active' : ''}
            onClick={() => stepsActive()}
          >
            Schritte
          </Tab>
        </TabContainer>

        {showIngredients ? renderIngredients() : renderSteps()}
      </RecipeDetailContent>
    </>
  )

  function ingredientsActive() {
    setShowIngredients(true)
    setShowSteps(false)
  }

  function stepsActive() {
    setShowIngredients(false)
    setShowSteps(true)
  }

  function renderIngredients() {
    return (
      <>
        {ingredients.map((ingredient, index) => (
          <Ingredients
            key={index}
            amount={ingredient.amount}
            unit={ingredient.unit}
            ingredientItem={ingredient.ingredientItem}
          />
        ))}
      </>
    )
  }

  function renderSteps() {
    return <p>{steps}</p>
  }
}
