import React from 'react'
import styled from 'styled-components'

import Page from '../components/page'
import Outline from '../components/outline'

function getRandomBoxHeight() {
  return Math.floor(Math.random() * (300 - 200) + 200)
}

const FlexMasonry = styled.div`
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

const MasonTile = styled.div`
  height: ${props => props.height || 100}px;
  width: 33%;
  padding: 4px;
  box-sizing: border-box;
`

const PageMasonry = () => (
  <Page>
    <FlexMasonry>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
      <MasonTile height={getRandomBoxHeight()}>
        <Outline></Outline>
      </MasonTile>
    </FlexMasonry>
  </Page>
)

export default PageMasonry
