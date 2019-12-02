import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import recipesData from './recipes.json'
import Detail from './Detail.js'
import Overview from './Overview.js'

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(recipesData[0])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Overview
              recipesData={recipesData}
              handleRecipeClick={index => handleRecipeClick(index)}
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
        </Switch>
      </Router>
    </>
  )

  function handleRecipeClick(index) {
    setSelectedRecipe(recipesData[index])
  }
}
