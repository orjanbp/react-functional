import React from 'react'
import styled from 'styled-components'

import Page from '../components/page'
import Text from '../components/text'
import Outline from '../components/outline'

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    'head head'
    'article side'
    'footer footer';
  grid-template-rows:
    300px
    minmax(600px, auto)
    200px;
  grid-template-columns: 3fr 1fr;
`

const GridBox = styled.div`
  box-sizing: border-box;
  padding: 8px;
  grid-area: ${props => (props.area ? props.area : '')};
`

const PageCssGrid = () => (
  <Page>
    <Grid>
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
