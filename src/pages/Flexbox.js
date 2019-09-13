import React from 'react'

import Page from '../components/page'
import Text from '../components/text'
import Outline from '../components/outline'

import FlexRow from '../components/flexbox/flex-row'
import FlexColumn from '../components/flexbox/flex-column'

// Dummy element to foreach a row of cols on page
let cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const PageFlexbox = () => (
  <Page>
    <FlexRow>
      <FlexColumn col="12" style={{ height: 200 }}>
        <Outline>
          <Text.p>12 Col</Text.p>
        </Outline>
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      {cols.map(col => (
        <FlexColumn col="1">
          <Outline>
            <Text.p>1 Col</Text.p>
          </Outline>
        </FlexColumn>
      ))}
    </FlexRow>
    <FlexColumn col="9" style={{ height: 400 }}>
      <Outline>
        <Text.p>9 Col</Text.p>
        <Text.h1>Heading</Text.h1>
        <Text.h2>Subheading</Text.h2>
        <Text.p>Paragraph</Text.p>
        <Text.p>
          Another Paragraph <br /> with a line break
        </Text.p>
      </Outline>
    </FlexColumn>
    <FlexColumn col="3">
      <Outline>
        <Text.p>3 Col</Text.p>
      </Outline>
    </FlexColumn>
    <FlexColumn col="6" style={{ height: 200 }}>
      <Outline>
        <Text.p>6 Col</Text.p>
      </Outline>
    </FlexColumn>
    <FlexColumn col="6" style={{ height: 200 }}>
      <Outline>
        <Text.p>6 Col</Text.p>
      </Outline>
    </FlexColumn>
  </Page>
)

export default PageFlexbox
