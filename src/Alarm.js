import React from 'react'
import styled from 'styled-components/macro'
import close from './assets/close.svg'
import plus from './assets/add-orange.svg'
import minus from './assets/minus-orange.svg'

export default function Alarm({ onClose }) {
  return (
    <Darkscreen>
      <Popup>
        <Top>
          <img src={close} alt="" onClick={onClose} />
        </Top>

        <Wrapper>
          <img src={plus} alt="" />
          <Time>20:00</Time>
          <img src={minus} alt="" />
        </Wrapper>
        <TimeUnit>Minuten</TimeUnit>
        <Button>Timer starten</Button>
      </Popup>
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
  justify-content: space-around;
  align-content: center;
  width: 80%;
`

const Time = styled.div`
  font-size: 1.875rem;
  margin: 0;
`

const TimeUnit = styled.p`
  font-size: 0.75rem;
  margin: 0;
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
