import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function Timer({ time }) {
  const [counter, setCounter] = useState(time)

  return (
    <Container>
      <Counter>{counter}</Counter>
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
  align-items: center;
`

const Counter = styled.p``
