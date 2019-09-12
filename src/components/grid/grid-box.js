import styled from 'styled-components'

const GridBox = styled.div`
  box-sizing: border-box;
  padding: 8px;
  grid-area: ${props => (props.area ? props.area : '')};
`

export default GridBox
