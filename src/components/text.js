import styled from 'styled-components'

const font = {
    heading: '"Rubik", sans-serif',
    body: '"Karla", sans-serif'
}

const color = {
    body: '#c8d6e5',
    heading: '#eef2f7',
    link: '#39ace7',
    linkFocus: '#bbe2f7',
    linkActive: '#60bcec'
}

const h1 = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${color.heading};
  font-family: ${font.heading};
  font-size: 3rem;
  line-height: 3rem;
`

const h2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${color.heading};
  font-family: ${font.heading};
  font-size: 1.5rem;
  line-height: 2.5rem;
`

const h3 = styled.h3`
  margin-top: 0rem;
  margin-bottom: 0.250rem;
  color: ${color.heading};
  font-family: ${font.heading};
  font-size: 1.125rem;
  line-height: 1.5rem;
`

const p = styled.p`
  margin: 0rem;
  color: ${color.body};
  font-family: ${font.body};
  font-size: 1.125rem;
  line-height: 1.5rem;

  & + p {
    margin-top: 1rem;
  }
`

const sub = styled(p)`
  font-size: 1rem;
  line-height: 1.125rem;
  font-style: italic;
`

const a = styled.a`
  margin: 0rem;
  color: ${color.link};
  font-family: ${font.body};
  font-size: 1.125rem;
  line-height: 1.5rem;

  &::after {
    background-color: ${color.link};
  }

  &:hover,
  &:focus {
    color: ${color.linkFocus};

    &::after {
      background-color: ${color.linkFocus};
    }
  }

  &:active {
    color: ${color.linkActive};

    &::after {
      background-color: ${color.linkActive};
    }
  }
`

const Text = {
  font,
  color,
  h1,
  h2,
  h3,
  p,
  sub,
  a
}

export default Text
