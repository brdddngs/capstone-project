import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import close from './assets/close.svg'
import plus from './assets/add-orange.svg'
import minus from './assets/minus-orange.svg'

export default function Alarm({ onClose, onStart, onCounting }) {
  const [minutes, setMinutes] = useState('20')
  const [seconds, setSeconds] = useState('00')
  const min = Number(minutes)
  const sec = Number(seconds)
  const [counter, setCounter] = useState(min * 60 + sec)
  const [countUp, setCountUp] = useState(true)
  const [countDown, setCountDown] = useState(true)

  useEffect(() => {
    setCountDown(counter === 0 ? false : true)
    setCountUp(counter >= 7200 ? false : true)
    const timeDecimal = counter / 60
    const timeList = Array.from(timeDecimal.toString())
    if (timeList.includes('.')) {
      const index = timeList.findIndex(item => item === '.')
      const min = timeList.slice(0, index).join('')
      setMinutes(min)
      setSeconds('30')
    } else {
      const min = timeList.join('')
      setMinutes(min)
      setSeconds('00')
    }
  }, [countUp, countDown, counter, seconds, minutes])

  return (
    <Darkscreen>
      <Popup>
        <Top>
          <img src={close} alt="" onClick={onClose} />
        </Top>

        <Wrapper>
          <img
            src={plus}
            alt=""
            onClick={() => setCounter(countUp ? addTime() : counter)}
          />
          <Time>
            {minutes}:{seconds}
          </Time>
          <img
            src={minus}
            alt=""
            onClick={() => setCounter(countDown ? removeTime() : counter)}
          />
        </Wrapper>
        <TimeUnit>Minuten</TimeUnit>
        <Button onClick={() => onStart(counter) + onCounting()}>
          Timer starten
        </Button>
      </Popup>
    </Darkscreen>
  )

  function addTime() {
    if (min < 10) {
      return counter + 30
    }
    if (min < 25) {
      return counter + 60
    }
    return counter + 300
  }

  function removeTime() {
    if (min < 10) {
      return counter - 30
    }
    if (min < 25) {
      return counter - 60
    }
    return counter - 300
  }
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 75%;
`

const Time = styled.div`
  text-align-last: center;
  font-size: 1.875rem;
`

const TimeUnit = styled.p`
  font-size: 0.75rem;
  margin: 6px 0 4px;
  text-align: center;
`

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  padding: 6px 20px;
  background-color: #e29413;
  width: 190px;
  text-align: center;
  color: #f2f2f2;
  margin: 20px auto;
`
