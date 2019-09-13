import React from 'react'

import Page from '../components/page'
import MasonWall from '../components/masonry/mason-wall'
import DogImageMason from '../components/masonry/dog-image-mason'

function getRandomBoxHeight() {
  return Math.floor(Math.random() * (300 - 200) + 200)
}

const PageMasonry = () => (
  <Page>
    <MasonWall>
      <DogImageMason size='10' />
    </MasonWall>
  </Page>
)

export default PageMasonry
