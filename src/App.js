import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import recipesData from './recipes.json'
import Detail from './Detail.js'
import Overview from './Overview.js'
import FabButton from './FabButton.js'
import NewRecipe from './NewRecipe.js'

export default function App() {
  //const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(recipesData[0])

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Overview
            recipesData={recipesData}
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
          <NewRecipe title="Neues Rezept erstellen" />
        </Route>
      </Switch>
    </Router>
  )

  function handleRecipeClick(index) {
    setSelectedRecipe(recipesData[index])
  }
}
