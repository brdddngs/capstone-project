import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function FabButton({ asset, alt }) {
  return (
    <Link to="/create/newRecipe">
      <Button>
        <img src={require(`./assets/${asset}.svg`)} alt={alt} />
      </Button>
    </Link>
  )
}

const Button = styled.span`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(226, 148, 19, 0.95);
`
