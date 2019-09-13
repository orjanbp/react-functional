import styled from 'styled-components'

import config from '../config'

const h1 = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${config.color.heading};
  font-family: ${config.font.heading};
  font-size: 3rem;
  line-height: 3rem;
`

const h2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${config.color.heading};
  font-family: ${config.font.heading};
  font-size: 1.5rem;
  line-height: 2.5rem;
`

const h3 = styled.h3`
  margin-top: 0rem;
  margin-bottom: 0.250rem;
  color: ${config.color.heading};
  font-family: ${config.font.heading};
  font-size: 1.125rem;
  line-height: 1.5rem;
`

const p = styled.p`
  margin: 0rem;
  color: ${config.color.body};
  font-family: ${config.font.body};
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
  color: ${config.color.link};
  font-family: ${config.font.body};
  font-size: 1.125rem;
  line-height: 1.5rem;

  &::after {
    background-color: ${config.color.link};
  }

  &:hover,
  &:focus {
    color: ${config.color.linkFocus};

    &::after {
      background-color: ${config.color.linkFocus};
    }
  }

  &:active {
    color: ${config.color.linkActive};

    &::after {
      background-color: ${config.color.linkActive};
    }
  }
`

const Text = {
  h1,
  h2,
  h3,
  p,
  sub,
  a
}

export default Text
