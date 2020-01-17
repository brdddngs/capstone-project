import React from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import bg from './assets/overview_empty/bg.PNG'
import topf from './assets/overview_empty/topf_cut.png'
import deckel from './assets/overview_empty/deckel_cut.png'

export default function OverviewEmpty({ headline }) {
  return (
    <Grid>
      <Header>
        <Headline>{headline}</Headline>
      </Header>
      <Wrapper>
        <ImageContainer>
          <Cover src={deckel} alt=""></Cover>
          <Pot src={topf} alt="" />
          <Background src={bg} alt="" />
        </ImageContainer>
        <p
          style={{
            color: '#a5a5a5',
            fontSize: '1.1rem',
            margin: '24px 0px',
            padding: '0 0 14px',
          }}
        >
          Dein Kochbuch & Du
        </p>
      </Wrapper>
    </Grid>
  )
}

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 14px 20px 0;
  background-color: #fff;
  &::after {
    content: '';
    height: 11px;
    width: 100%;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
    position: absolute;
    bottom: -10px;
    left: 0;
    z-index: 2;
  }
`

const Headline = styled.h1`
  font-size: 1.67rem;
  font-weight: 700;
  margin: 0;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImageContainer = styled.div`
  position: relative;
`

const Background = styled.img`
  width: 100%;
  object-fit: cover;
`
const Pot = styled.img`
  position: absolute;
  height: 166px;
  bottom: 26px;
  left: 50%;
  transform: translate(-50%);
`
const Cover = styled.img`
  position: absolute;
  width: 166px;
  bottom: 180px;
  left: 50%;
  transform: translate(-52%);
`
