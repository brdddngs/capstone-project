import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function Timer({ time }) {
  const [counter, setCounter] = useState(time)
  const minutes = Math.floor(counter / 60).toString()
  const seconds = (counter - minutes * 60).toString()
  console.log(seconds)

  return (
    <Container>
      <Time>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Time>
    </Container>
  )
}

const Container = styled.section`
  z-index: 1;
  position: fixed;
  bottom: 90px;
  right: 10px;
  width: 80px;
  display: grid;
  justify-content: center;
`

const Time = styled.p`
  margin: 0;
  padding: 2px 14px;
  background-color: #e29413;
  border-radius: 12px;
  box-shadow: 0 0 4px 0 rgba(49, 49, 49, 0.5);
  font-size: 1rem;
  font-weight: 800;
  color: #f2f2f2;
`
