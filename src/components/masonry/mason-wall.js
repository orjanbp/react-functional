import styled from 'styled-components'

const MasonWall = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 1400px;
  padding: 4px;
  box-sizing: border-box;

  & > div:nth-child(3n + 1) {
    order: 1;
  }

  & > div:nth-child(3n + 2) {
    order: 2;
  }

  & > div:nth-child(3n) {
    order: 3;
  }

  &::before,
  &::after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
`

export default MasonWall
