import React from 'react'

import Page from '../components/page'
import Text from '../components/text'
import Outline from '../components/outline'

import Grid from '../components/grid/grid'
import GridBox from '../components/grid/grid-box'


const PageCssGrid = () => (
  <Page>
    <Grid
      areas="'header header' 'article side' 'footer footer'"
      rows="200px minmax(500px, auto) 200px"
      columns="3fr 1fr"
    >
      <GridBox area="header">
        <Outline>
          <Text.p>Header Area</Text.p>
        </Outline>
      </GridBox>
      <GridBox area="article">
        <Outline>
          <Text.p>Article Area</Text.p>
          <Text.h1>Heading</Text.h1>
          <Text.h2>Subheading</Text.h2>
          <Text.p>Paragraph</Text.p>
          <Text.p>
            Another Paragraph <br /> with a line break
          </Text.p>
        </Outline>
      </GridBox>
      <GridBox area="side">
        <Outline>
          <Text.p>Side Area</Text.p>
        </Outline>
      </GridBox>
      <GridBox area="footer">
        <Outline>
          <Text.p>Footer Area</Text.p>
        </Outline>
      </GridBox>
    </Grid>
  </Page>
)

export default PageCssGrid
