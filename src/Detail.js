import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link, useParams } from 'react-router-dom'
import back from './assets/arrow_back.svg'
import edit from './assets/edit.svg'
import defaultImg from './assets/img/default-img-detail2.jpg'
import FabButton from './FabButton'
import PopUp from './TimerPopUp'
import Timer from './Timer'

export default function Detail({ recipes }) {
  const { id } = useParams()
  const { title, steps, ingredients, image } = recipes.find(
    recipe => recipe.id === id
  )
  const [showIngredients, setShowIngredients] = useState(true)
  const [showSteps, setShowSteps] = useState(false)

  const [showPopUp, setShowPopUp] = useState(false)
  const [time, setTime] = useState(1200)
  const [showTimer, setShowTimer] = useState(false)

  return (
    <>
      {showPopUp ? (
        <PopUp
          onClose={() => togglePopUp()}
          onStart={counter => setTime(counter)}
          onCounting={() => onCounting()}
        />
      ) : null}
      {showTimer ? (
        <Timer time={time} onClose={() => setShowTimer(!setShowTimer)}></Timer>
      ) : null}
      <Nav>
        <Link to="/">
          <img src={back} alt="zurück" />
        </Link>
        <Link to={`/detail/${id}/edit`}>
          <img src={edit} alt="bearbeiten" />
        </Link>
      </Nav>

      <Container>
        <Header>
          <Title>{title}</Title>
          <Image src={image === '' ? defaultImg : image} />
        </Header>
        <Wrapper>
          <FabButton asset="add_alarm" onClick={() => togglePopUp()} />
          <TabBar>
            <Tab
              className={showIngredients ? 'active' : ''}
              onClick={() => ingredientsActive()}
            >
              Zutaten
            </Tab>
            <Tab
              className={showSteps ? 'active' : ''}
              onClick={() => stepsActive()}
            >
              Schritte
            </Tab>
          </TabBar>

          <Content>
            {showIngredients ? renderIngredients() : renderSteps()}
          </Content>
        </Wrapper>
      </Container>
    </>
  )

  function ingredientsActive() {
    setShowIngredients(true)
    setShowSteps(false)
  }

  function stepsActive() {
    setShowIngredients(false)
    setShowSteps(true)
  }

  function renderIngredients() {
    return (
      <>
        {ingredients.map((ingredient, index) => (
          <IngredientWrapper key={index}>
            <Item>
              {ingredient.amount} {ingredient.unit}
            </Item>
            <Item>{ingredient.ingredientItem}</Item>
          </IngredientWrapper>
        ))}
      </>
    )
  }

  function renderSteps() {
    return <Steps>{steps}</Steps>
  }

  function togglePopUp() {
    setShowPopUp(!showPopUp)
  }

  function onCounting() {
    togglePopUp()
    setShowTimer(!showTimer)
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-rows: 300px auto;
`

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.7);
`

const Header = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #e29413;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h2`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  bottom: 0;
  z-index: 1;
  margin: 0;
  padding: 0 20px 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  font-size: 1.5rem;
  font-weight: 600;
  color: #f2f2f2;
`

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 66px auto;
  position: relative;
  width: 100%;
  padding: 0 20px;
  position: relative;
  overflow-y: scroll;
`

const TabBar = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 20px 0 0;
  &::after {
    content: '';
    z-index: 1;
    height: 16px;
    width: 100%;
    background: linear-gradient(#fff, rgba(255, 255, 255, 0));
    position: absolute;
    bottom: -15px;
    left: 0;
  }
`

const Tab = styled.li`
  margin: 0;
  width: 50%;
  text-align: center;
  padding: 10px 0;
  color: #a5a5a5;
  font-weight: 600;
  list-style-type: none;
  &.active {
    color: #e29413;
    background-color: rgba(226, 147, 19, 0.1);
    border-bottom: 4px solid #e29413;
  }
`
const Content = styled.div`
  position: relative;
  width: 100%;
  overflow-y: scroll;
  padding: 18px 0 26px;
`

const Steps = styled.p`
  margin: 0;
  &:last-child {
    padding-bottom: 54px;
  }
`

const IngredientWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  &:last-child {
    padding-bottom: 54px;
  }
`
const Item = styled.p`
  margin: 3px 6px;
  &:first-child {
    text-align: right;
  }
`
