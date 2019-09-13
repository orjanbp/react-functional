import React from 'react'

import Page from '../components/page'
import MasonWall from '../components/masonry/mason-wall'
import DogImageMason from '../components/masonry/dog-image-mason'

const PageMasonry = () => (
  <Page>
    <MasonWall>
      <DogImageMason size='12' />
    </MasonWall>
  </Page>
)

export default PageMasonry
