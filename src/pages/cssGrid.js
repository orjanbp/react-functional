import React from 'react';
import styled from 'styled-components'

import Page from '../components/page'
import Text from '../components/text'

const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas:
        "a a a a a a a a a a a a"
        "d d d d d d d . . . . ."
        "b b b b b b b . . . . .";
    grid-template-rows:
        300px
        minmax(800px, auto)
        300px;
    grid-template-columns: auto;
`

const Container = styled.div`
    grid-area: ${props => props.area ? props.area : ''};
`

const CssGrid = () => (
    <Page>
        <Grid>
            <Container area='d' style={{background: '#bdc3c7'}}>
                <Text.h2>Footer Content</Text.h2>
            </Container>
            <Container area='a' style={{background: '#c0392b'}}>
                <Text.h2>Banner Image</Text.h2>
            </Container>
            <Container area='b' style={{background: '#2980b9'}}>
                <Text.h1>Article Content</Text.h1>
                <Text.h2>Subheading</Text.h2>
                <Text.p>Paragraph</Text.p>
                <Text.p>Another Paragraph <br /> with a line break</Text.p>
            </Container>
            <Container area='c' style={{background: '#16a085'}}>
                <Text.h2>Sidebar Content</Text.h2>
            </Container>
        </Grid>
    </Page>
)

export default CssGrid;
