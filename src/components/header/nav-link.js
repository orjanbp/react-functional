import styled from 'styled-components'
import Text from '../text'

const NavLink = styled(Text.a)`
  display: inline-block;
  padding: 10px 16px;
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    position: relative;
    left: -4px;
    width: 0px;
    height: 2px;
    margin: 2px auto 0px;
    border-radius: 1px;
    transition: width 0.2s ease-out;
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    width: calc(100% + 8px);
  }
`

export default NavLink
