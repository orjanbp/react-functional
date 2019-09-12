import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    ${props => (props.areas ? props.areas : 'auto')};
  grid-template-rows:
    ${props => (props.rows ? props.rows : 'auto')};
  grid-template-columns:
    ${props => (props.rows ? props.columns : 'auto')};
`

export default Grid
