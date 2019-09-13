import React from 'react'

import Page from '../components/page'
import Outline from '../components/outline'
import MasonWall from '../components/masonry/mason-wall'
import MasonTile from '../components/masonry/mason-tile'

function getRandomBoxHeight() {
  return Math.floor(Math.random() * (300 - 200) + 200)
}

const PageMasonry = () => (
  <Page>
    <MasonWall>
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
    </MasonWall>
  </Page>
)

export default PageMasonry
