import styled from 'styled-components/macro'

const Header = styled.header`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: #fff;
  &::after {
    content: '';
    height: 16px;
    width: 100%;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
    position: absolute;
    bottom: -16px;
    left: 0;
  }
`

export default Header
