import React from 'react'
import styled from 'styled-components/macro'

export default function FabButton({ asset, onClick }) {
  return (
    <LinkStyled onClick={onClick}>
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
const LinkStyled = styled.div`
  z-index: 99;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
