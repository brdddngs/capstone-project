import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
          <Link to="/create/newRecipe">
            <FabButton asset="add" />
          </Link>
          <Overview recipes={recipes} headline="Cookbook" />
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
            onEdit={handleEditedRecipe}
            onDelete={handleDeletedRecipe}
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

  function handleDeletedRecipe(deletedRecipe) {
    const index = recipes.findIndex(recipe => recipe.id === deletedRecipe.id)
    setRecipes([...recipes.slice(0, index), ...recipes.slice(index + 1)])
  }
}
