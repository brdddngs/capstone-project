import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import animationVideo from './assets/animation.MP4'

export default function OverviewEmpty({ headline }) {
  const vidoeEl = useRef()

  function playVideo() {
    vidoeEl.current.play()
  }

  return (
    <Grid>
      <Header>
        <Headline>{headline}</Headline>
      </Header>
      <Wrapper onClick={() => playVideo()}>
        <Animation
          ref={vidoeEl}
          src={animationVideo}
          type="video/mp4"
        ></Animation>
        <Text>Dein Kochbuch & Du</Text>
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

const Animation = styled.video`
  width: 100%;
`

const Text = styled.p`
  color: #a5a5a5;
  font-size: 1.1rem;
  margin: 24px 0px;
  padding: 0 0 14px;
`
