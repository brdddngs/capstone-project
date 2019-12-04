import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import close from './assets/close.svg'
import add from './assets/add.svg'
import { Link } from 'react-router-dom'

export default function NewRecipe({ title }) {
  // const ReactDatalist = require('react-datalist')
  // const options = ['apple', 'orange', 'pear', 'pineapple', 'melon']

  const [inputList, setInputList] = useState([
    { ingredientItem: '', amount: '', unit: '' },
  ])

  const selectOptions = ['g', 'kg', 'ml', 'l', 'TL', 'EL']

  function addNewInputs() {
    setInputList([...inputList, { ingredientItem: '', amount: '', unit: '' }])
  }

  return (
    <Grid>
      <Nav>
        <Link to="/">
          <img src={close} alt="close" />
        </Link>
      </Nav>
      <Container>
        <Title>{title}</Title>
        <FormStyled>
          <LabelStyled>
            <input name="title" placeholder="Wie heißt dein Rezept?" />
          </LabelStyled>
          <LabelStyled as="div">
            Zutaten
            {inputList.map((item, index) => {
              const { ingredientItem, amount, unit } = item

              function updateInput(event) {
                const inputName = event.target.name
                const inputData = inputList[index]
                setInputList([
                  ...inputList.slice(0, index),
                  { ...inputData, [inputName]: event.target.value },
                  ...inputList.slice(index + 1),
                ])
              }

              return (
                <Wrapper key={index}>
                  <MultiInput
                    name="ingredientItem"
                    value={ingredientItem}
                    onChange={updateInput}
                    type="text"
                    placeholder="Zutat"
                  />
                  <MultiInput
                    name="amount"
                    value={amount}
                    onChange={updateInput}
                    type="number"
                    placeholder="Anzahl"
                  />
                  <SelectStyled
                    id="myList"
                    name="unit"
                    value={unit}
                    onChange={updateInput}
                    placeholder="Einheit"
                  >
                    <option value="" disabled hidden>
                      Einheit
                    </option>
                    {selectOptions.map((selectOption, index) => {
                      return (
                        <option value={selectOption} key={index}>
                          {selectOption}
                        </option>
                      )
                    })}
                  </SelectStyled>
                </Wrapper>
              )
            })}
          </LabelStyled>
          <AddNewInput onClick={addNewInputs}>
            <img src={add} alt="add" />
          </AddNewInput>
        </FormStyled>
      </Container>
    </Grid>
  )
}

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: #fff;
`
const Container = styled.section`
  position: absolute;
  top: 56px;
  width: 100%;
  padding: 0 20px;
`
const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  margin: 20px 0;
`
const FormStyled = styled.form`
  display: grid;
  gap: 20px;
`

const LabelStyled = styled.label`
  width: 100%;
  display: grid;
  gap: 10px;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4px;
  width: 100%;
  margin: 10px 0;
`
const MultiInput = styled.input`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 6px;
  border-bottom: 2px solid #a5a5a5;
  color: #313131;
  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #e29413;
    background-color: rgba(226, 147, 19, 0.1);
  }
`
const AddNewInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e29413;
  margin: 0 auto;
`
const SelectStyled = styled.select`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 6px;
  border-bottom: 2px solid #a5a5a5;
  color: #313131;
  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #e29413;
    background-color: rgba(226, 147, 19, 0.1);
  }
`
