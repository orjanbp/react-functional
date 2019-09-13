import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

import config from '../../config'

const NavLink = styled(Link)`
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  margin: 0rem;
  color: ${config.color.link};
  font-family: ${config.font.body};
  font-size: 1.125rem;
  line-height: 1.5rem;

  &::after {
    content: '';
    display: block;
    position: relative;
    left: -4px;
    width: 0px;
    height: 2px;
    background-color: ${config.color.link};
    margin-top: 2px;
    border-radius: 1px;
    transition: width 0.2s ease-out;
  }

  &.current {
    pointer-events: none;
    color: ${config.color.linkFocus};
  }

  &:hover,
  &:focus {
    color: ${config.color.linkFocus};
  }

  &:active {
    color: ${config.color.linkActive};
  }

  &:hover::after {
    background-color: ${config.color.linkFocus};
    width: calc(100% + 8px);
  }

  &:active::after {
    background-color: ${config.color.linkActive};
  }
`

export default NavLink
