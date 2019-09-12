import React from 'react'

import Page from '../components/page'
import Text from '../components/text'
import Column from '../components/column'
import Outline from '../components/outline'

const PageFlexbox = () => (
  <Page>
    <Column col="12" area="a" style={{ height: 300 }}>
      <Outline>
        <Text.p>Header</Text.p>
      </Outline>
    </Column>
    <Column col="9" style={{}}>
      <Outline>
        <Text.p>Article</Text.p>
        <Text.h1>Heading</Text.h1>
        <Text.h2>Subheading</Text.h2>
        <Text.p>Paragraph</Text.p>
        <Text.p>
          Another Paragraph <br /> with a line break
        </Text.p>
      </Outline>
    </Column>
    <Column col="3" style={{ minHeight: 600 }}>
      <Outline>
        <Text.p>Sidebar</Text.p>
      </Outline>
    </Column>
    <Column col="12" style={{ height: 200 }}>
      <Outline>
        <Text.p>Footer</Text.p>
      </Outline>
    </Column>
  </Page>
)

export default PageFlexbox
