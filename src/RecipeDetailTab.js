import styled from 'styled-components/macro'

export default styled.li`
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
