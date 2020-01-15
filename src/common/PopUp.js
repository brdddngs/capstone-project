import React from 'react'
import styled from 'styled-components/macro'

export default function PopUp({ children }) {
  return (
    <Darkscreen>
      <PopUpStyled>
        <Content>{children}</Content>
      </PopUpStyled>
    </Darkscreen>
  )
}

const Darkscreen = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  padding: 0 30px;
`

const PopUpStyled = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  filter: drop-shadow(0 2px 10px rgba(49, 49, 49, 0.5));
`

const Content = styled.div`
  margin: 0;
  padding: 6px 0 24px;
`
