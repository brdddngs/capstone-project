import React from 'react'
import './styles.scss'
import recipes from './recipes.json'

function App() {
  return (
    <div className="App">
      {recipes.map((recipe, index) => (
        <div key={index} className="container">
          <h2>{recipe.title}</h2>
          <p>{recipe.steps}</p>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-wrapper">
              <p>{ingredient.amount}</p>
              <p>{ingredient.unit}</p>
              <p>{ingredient.food}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App
