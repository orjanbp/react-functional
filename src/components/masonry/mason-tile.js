import styled from 'styled-components'

const MasonTile = styled.div`
  position: relative;
  height: ${props => props.height || 100}px;
  width: 33%;
  padding: 4px;
  box-sizing: border-box;
`

export default MasonTile
