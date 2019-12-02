import React from 'react'
import styled from 'styled-components/macro'

export default function DetailIamge({ title, image }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Gradient />
      <Iamge src={require(`./assets/img/${image}`)} alt={title} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #e29413;
`

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`

const Iamge = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`

const Title = styled.h2`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  margin: 0;
  padding: 0 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f2f2f2;
`
