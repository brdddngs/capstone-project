import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Ingredients from './Ingredients'

export default function RecipeDetail({ steps, ingredients }) {
  const [showIngredients, setShowIngredients] = useState(true)
  const [showSteps, setShowSteps] = useState(false)

  return (
    <Container>
      <TabBar>
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
      </TabBar>

      {showIngredients ? renderIngredients() : renderSteps()}
    </Container>
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

const Container = styled.section`
  width: 100%;
  padding: 0 20px;
`

const TabBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 22px 0 18px;
`

const Tab = styled.li`
  margin: 0;
  width: 50%;
  text-align: center;
  padding: 10px 0;
  color: #a5a5a5;
  font-weight: 600;
  list-style-type: none;
  &.active {
    color: #e29413;
    background-color: rgba(226, 147, 19, 0.1);
    border-bottom: 4px solid #e29413;
  }
`
