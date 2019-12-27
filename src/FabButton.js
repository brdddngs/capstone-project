import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function FabButton({ asset, linkTo }) {
  return (
    <LinkStyled to={linkTo}>
      <Button>
        <img src={require(`./assets/${asset}.svg`)} alt="" />
      </Button>
    </LinkStyled>
  )
}

const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(226, 148, 19, 0.95);
`
const LinkStyled = styled(Link)`
  z-index: 1;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
