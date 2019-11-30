import React from 'react'
import recipesData from './recipes.json'
import Detail from './Detail.js'
import Overview from './Overview.js'

export default function App() {
  return (
    <>
      <Overview recipesData={recipesData}></Overview>
      {/*
      <Detail
        title={recipesData[0].title}
        steps={recipesData[0].steps}
        ingredients={recipesData[0].ingredients}
        image={recipesData[0].image}
      />  
      */}
    </>
  )
}
