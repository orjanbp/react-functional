import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Text from '../text'

const NavLink = styled(Link)`
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  margin: 0rem;
  color: ${Text.color.link};
  font-family: ${Text.font.body};
  font-size: 1.125rem;
  line-height: 1.5rem;

  &::after {
    content: '';
    display: block;
    position: relative;
    left: -4px;
    width: 0px;
    height: 2px;
    background-color: ${Text.color.link};
    margin-top: 2px;
    border-radius: 1px;
    transition: width 0.2s ease-out;
  }

  &:hover,
  &:focus {
    color: ${Text.color.linkFocus};

    &::after {
      background-color: ${Text.color.linkFocus};
      width: calc(100% + 8px);
    }
  }

  &:active {
    color: ${Text.color.linkActive};

    &::after {
      background-color: ${Text.color.linkActive};
    }
  }
`

export default NavLink
