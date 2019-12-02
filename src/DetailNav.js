import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import back from './assets/arrow_back.svg'

export default function DetailNav() {
  return (
    <Nav>
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
    </Nav>
  )
}

const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.7);
`
