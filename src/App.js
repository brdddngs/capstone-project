import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './Detail.js'
import Overview from './Overview.js'
import FabButton from './FabButton.js'
import NewRecipe from './NewRecipe.js'
import EditRecipe from './EditRecipe.js'
//import recipesData from './recipes.json'

export default function App() {
  let recipesFromStorage = JSON.parse(localStorage.getItem('recipes'))
  const [recipes, setRecipes] = useState(recipesFromStorage || [])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Overview recipes={recipes} headline="Cookbook" />
          <FabButton linkTo="/create/newRecipe" asset="add" />
        </Route>

        <Route path={`/detail/:id`} exact>
          <Detail recipes={recipes} />
        </Route>

        <Route path="/create/newRecipe">
          <NewRecipe
            headline="Neues Rezept erstellen"
            onSubmit={handleNewRecipe}
            recipes={recipes}
            linkTo="/"
          />
        </Route>
        <Route path={`/detail/:id/edit`}>
          <EditRecipe
            headline="Rezept bearbeiten"
            recipes={recipes}
            onSubmit={handleEditedRecipe}
          />
        </Route>
      </Switch>
    </Router>
  )

  function handleNewRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe])
  }

  function handleEditedRecipe(editedRecipe) {
    const index = recipes.findIndex(recipe => recipe.id === editedRecipe.id)
    setRecipes([
      ...recipes.slice(0, index),
      { ...recipes[index], ...editedRecipe },
      ...recipes.slice(index + 1),
    ])
  }
}
