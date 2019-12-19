import styled from 'styled-components/macro'
import React from 'react'

export default function OverviewNav({ pageTitle }) {
  return (
    <Nav>
      <Title>{pageTitle}</Title>
      {/* <img src={require('./assets/search.svg')} alt="search" /> */}
    </Nav>
  )
}

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 56px;
  padding: 0 20px 4px;
  background-color: #fff;
  &::after {
    content: '';
    height: 16px;
    width: 100%;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
    position: absolute;
    bottom: -15px;
    left: 0;
  }
`

const Title = styled.h1`
  font-size: 1.67rem;
  font-weight: 700;
  margin: 0;
`
