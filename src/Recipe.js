import React, { useState } from 'react'
import Ingredients from './Ingredients'
import Steps from './Steps'

export default function Recipe({ title, steps, ingredients }) {
  const [collapsed, setCollapsed] = useState(true)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  return (
    <section className="recipe">
      <h2 onClick={() => toggleCollapsed()}>{title}</h2>
      {collapsed || renderDetails()}
    </section>
  )

  function renderDetails() {
    return (
      <>
        <Steps steps={steps} />
        {ingredients.map((ingredient, index) => (
          <Ingredients
            key={index}
            amount={ingredient.amount}
            unit={ingredient.unit}
            ingredientItem={ingredient.ingredientItem}
            collapsed={collapsed}
          />
        ))}
      </>
    )
  }
}
