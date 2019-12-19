import React from 'react'
import styled from 'styled-components/macro'
import minus from './assets/minus.svg'

const unitOptions = [
  '',
  'mg',
  'g',
  'pfd',
  'kg',
  'ml',
  'cl',
  'l',
  'Pr',
  'Msp',
  'TL',
  'EL',
  'Bd',
  'Stk',
  'Pck',
]

export default function InputsIngredients({
  deleteInput,
  onChange,
  ingredientItem,
  amount,
  unit,
}) {
  return (
    <Wrapper>
      <ButtonCircle onClick={index => deleteInput(index)} className="small">
        <img src={minus} alt="minus" name="deleteBtn" />
      </ButtonCircle>
      <InputStyled
        name="ingredientItem"
        value={ingredientItem}
        onChange={e => onChange(e.target.value, 'ingredientItem')}
        type="text"
        placeholder="Zutat"
      />
      <InputStyled
        name="amount"
        value={amount}
        onChange={e => onChange(e.target.value, 'amount')}
        //type="number"
        placeholder="Anzahl"
      />
      <SelectStyled
        name="unit"
        value={unit}
        onChange={e => onChange(e.target.value, 'unit')}
        placeholder="Einheit"
      >
        <option value="" disabled hidden>
          Einheit
        </option>
        {unitOptions.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          )
        })}
      </SelectStyled>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 2fr 1fr 1fr;
  align-items: center;
  gap: 4px;
  width: 100%;
`
const InputStyled = styled.input`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 6px;
  border-bottom: 2px solid #a5a5a5;
  color: #313131;
  caret-color: #e29413;
  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    border-bottom: 2px solid #e29413;
    background-color: rgba(226, 147, 19, 0.1);
  }
  &:nth-child(3) {
    text-align: center;
  }
`
const ButtonCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #e29413;
  margin: 10px auto 0;
  &.small {
    width: 24px;
    height: 24px;
  }
`
const SelectStyled = styled.select`
  all: unset;
  display: block;
  box-sizing: border-box;
  text-align-last: center;
  width: 100%;
  padding: 8px 6px;
  border-bottom: 2px solid #a5a5a5;
  color: #313131;
  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    border-bottom: 2px solid #e29413;
    background-color: rgba(226, 147, 19, 0.1);
  }
`
