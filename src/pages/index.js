import React from 'react';

import Page from '../components/page'
import Text from '../components/text'
import Column from '../components/column'

const PageIndex = () => (
    <Page>
        <Column col='6'>
            <Text.h1>Heading</Text.h1>
            <Text.h2>Subheading</Text.h2>
            <Text.p>Paragraph</Text.p>
            <Text.p>Another Paragraph <br /> with a line break</Text.p>
        </Column>
        <Column col='4'>
        </Column>
        <Column col='2'>
        </Column>
    </Page>
)

export default PageIndex;
