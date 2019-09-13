import styled from 'styled-components'

const MasonImage = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.27);
  transition: transform 0.2s ease-in-out;
  transition-delay: z-index 0.2s;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    z-index: 100;
    transition: transform 0.2s ease-in-out;
    transition-delay: z-index 0s;
  }
`

export default MasonImage
