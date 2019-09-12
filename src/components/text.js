import styled from 'styled-components'

const fontHeading = '"Rubik", sans-serif'
const fontBody = '"Karla", sans-serif'

const fontColor = '#c8d6e5'
const fontColorHeading = '#eef2f7'
const linkColor = '#39ace7'

const h1 = styled.h1`
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${fontColorHeading};
    font-family: ${fontHeading};
    font-size: 3rem;
    line-height: 3rem;
`

const h2 = styled.h2`
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${fontColorHeading};
    font-family: ${fontHeading};
    font-size: 1.5rem;
    line-height: 2.5rem;
`

const p = styled.p`
    margin: 0rem;
    color: ${fontColor};
    font-family: ${fontBody};
    font-size: 1.125rem;
    line-height: 1.5rem;

    & + p {
        margin-top: 1rem;
    }
`

const Text = {
    h1,
    h2,
    p
}

export default Text