import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Grid from './Grid'
import close from './assets/close.svg'
import add from './assets/add.svg'
import minus from './assets/minus.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AddPhoto from './AddPhoto'

export default function NewRecipe({ headline, onSubmit }) {
  const [inputList, setInputList] = useState([
    { ingredientItem: '', amount: '', unit: '' },
  ])
  const [recipeImage, setRecipeImage] = useState('')
  const unitOptions = [
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

  function addNewInputs() {
    setInputList([...inputList, { ingredientItem: '', amount: '', unit: '' }])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const ingredients = inputList
    const id = Math.round(Math.random() * 100000)
    const image = recipeImage

    onSubmit({ ...data, ingredients, id, image })
    form.reset()
    setInputList([{ ingredientItem: '', amount: '', unit: '' }])
  }

  return (
    <Grid>
      <Nav>
        <Link to="/">
          <img src={close} alt="close" />
        </Link>
      </Nav>
      <Container>
        <Title>{headline}</Title>

        <AddPhoto image={recipeImage} setImage={setRecipeImage}></AddPhoto>

        <FormStyled onSubmit={handleSubmit}>
          <LabelStyled>
            <InputStyled name="title" placeholder="Titel" />
          </LabelStyled>

          <Subtitle>Zutaten</Subtitle>

          {inputList.map((inputEl, index) => {
            const { ingredientItem, amount, unit } = inputEl

            function updateInput(event) {
              const inputElName = event.target.name
              const inputData = inputList[index]
              setInputList([
                ...inputList.slice(0, index),
                { ...inputData, [inputElName]: event.target.value },
                ...inputList.slice(index + 1),
              ])
            }

            return (
              <Wrapper key={index}>
                <ButtonCircle
                  onClick={() => console.log('delete input someday …')}
                  className="small"
                >
                  <img src={minus} alt="minus" />
                </ButtonCircle>
                <InputStyled
                  name="ingredientItem"
                  value={ingredientItem}
                  onChange={updateInput}
                  type="text"
                  placeholder="Zutat"
                />
                <InputStyled
                  name="amount"
                  value={amount}
                  onChange={updateInput}
                  type="number"
                  placeholder="Anzahl"
                />
                <SelectStyled
                  name="unit"
                  value={unit}
                  onChange={updateInput}
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
          })}
          <ButtonCircle onClick={addNewInputs}>
            <img src={add} alt="add" />
          </ButtonCircle>

          <Subtitle>Anleitung</Subtitle>

          <TextareaStyled
            name="steps"
            placeholder="Schritt für Schritt ..."
            rows="6"
          />

          <Button onClick={() => console.log('button was clicked')}>
            Rezept hinzufügen
          </Button>
        </FormStyled>
      </Container>
    </Grid>
  )
}

const Nav = styled.nav`
  z-index: 1;
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
  &:last-child {
    margin-bottom: 50px;
  }
`
const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  margin: 20px 0;
`
const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin: 20px 0 0;
`

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
`

const LabelStyled = styled.label`
  width: 100%;
  display: grid;
  gap: 10px;
`
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
const TextareaStyled = styled.textarea`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 6px;
  border: 1px solid #a5a5a5;
  color: #313131;
  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    border: transparent;
    border-bottom: 2px solid #e29413;
    background-color: rgba(226, 147, 19, 0.1);
  }
`
const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  padding: 6px 20px;
  background-color: #e29413;
  width: 190px;
  text-align: center;
  color: #f2f2f2;
  margin: 10px auto 0;
  &:disabled {
    background-color: #a5a5a5;
  }
`

FormStyled.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
