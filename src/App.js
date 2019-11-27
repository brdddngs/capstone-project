import React from 'react'
import './styles.scss'
import Recipe from './Recipe'
import recipes from './recipes.json'

function App() {
  return (
    <div className="App">
      {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
    </div>
  )
}

export default App
