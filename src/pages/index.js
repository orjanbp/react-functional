import React from 'react';

import Page from '../components/page'
import Text from '../components/text'

const PageIndex = () => (
    <Page>
        <Text.h1>Heading</Text.h1>
        <Text.h2>Subheading</Text.h2>
        <Text.p>Paragraph</Text.p>
        <Text.p>Another Paragraph <br /> with a line break</Text.p>
    </Page>
)

export default PageIndex;
