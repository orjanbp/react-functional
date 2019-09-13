import React from 'react'
import styled from 'styled-components'

import MasonTile from './mason-tile'

const ImageWrap = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.27);
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

const MasonImage = ({ src, alt }) => (
  <MasonTile height={'auto'}>
    <ImageWrap href={src} target='_blank'>
      <Image src={src} alt={alt} />
    </ImageWrap>
  </MasonTile>
)

export default MasonImage
