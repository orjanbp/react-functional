import React from 'react'

import Page from '../components/page'
import Text from '../components/text'
import Outline from '../components/outline'

import Grid from '../components/grid/grid'
import GridBox from '../components/grid/grid-box'


const PageCssGrid = () => (
  <Page>
    <Grid
      areas="'head head' 'article side' 'footer footer'"
      rows="300px minmax(600px, auto) 200px"
      columns="3fr 1fr"
    >
      <GridBox area="head">
        <Outline>
          <Text.p>Header</Text.p>
        </Outline>
      </GridBox>
      <GridBox area="article">
        <Outline>
          <Text.p>Article</Text.p>
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
          <Text.p>Sidebar</Text.p>
        </Outline>
      </GridBox>
      <GridBox area="footer">
        <Outline>
          <Text.p>Footer</Text.p>
        </Outline>
      </GridBox>
    </Grid>
  </Page>
)

export default PageCssGrid
