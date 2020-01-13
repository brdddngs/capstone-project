import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import close from './assets/close.svg'

export default function Timer({ time, onClose }) {
  const [counter, setCounter] = useState(time)
  const [counting, setCounting] = useState(true)
  const minutes = Math.floor(counter / 60).toString()
  const seconds = (counter - minutes * 60).toString()

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000)
    } else {
      clearTimeout()
      setCounting(false)
    }
  }, [counter])

  return counting ? (
    <Counter>
      <Time>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Time>{' '}
    </Counter>
  ) : (
    <Darkscreen>
      <Popup>
        <Top>
          <img src={close} alt="" onClick={onClose} />
        </Top>
        <Note>Der Timer ist abgelaufen!</Note>
      </Popup>
    </Darkscreen>
  )
}

const Counter = styled.section`
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
const Popup = styled.section`
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
const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`

const Note = styled.p`
  margin: 0;
  padding: 6px 0 24px;
  font-size: 1.5rem;
  text-align: center;
`
