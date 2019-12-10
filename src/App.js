import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom'
import Detail from './Detail.js'
import Overview from './Overview.js'
import FabButton from './FabButton.js'
import NewRecipe from './NewRecipe.js'
import EditRecipe from './EditRecipe'

export default function App() {
  let recipesFromStorage = JSON.parse(localStorage.getItem('recipes'))
  const [recipes, setRecipes] = useState(recipesFromStorage || [])
  saveRecipes()
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Overview
            recipes={recipes}
            handleRecipeClick={index => handleRecipeClick(index)}
          />
          <FabButton
            linkTo="/create/newRecipe"
            asset="add"
            alt="add a new recipe"
          />
        </Route>

        <Route path={`/detail/${selectedRecipe.title}`}>
          <Detail
            title={selectedRecipe.title}
            steps={selectedRecipe.steps}
            ingredients={selectedRecipe.ingredients}
            image={selectedRecipe.image}
          />
        </Route>

        <Route path="/create/newRecipe">
          <NewRecipe
            headline="Neues Rezept erstellen"
            onSubmit={handleFormSubmit}
          />
        </Route>
        <Route path={`/detail/${selectedRecipe.title}/edit`}>
          <EditRecipe></EditRecipe>
        </Route>
      </Switch>
    </Router>
  )

  function handleRecipeClick(index) {
    setSelectedRecipe(recipes[index])
  }

  function handleFormSubmit(newRecipe) {
    setRecipes([...recipes, newRecipe])
  }

  function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }
}
