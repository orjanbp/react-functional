import React from 'react'
import styled from 'styled-components'
import Text from '../components/text'

const HeaderOuter = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64px;
  width: 100%;
  background-color: #2d383c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.27);
`

const HeaderNav = styled.nav`
  align-self: center;
`

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

const Header = ({ links }) => (
  <HeaderOuter>
    <HeaderNav>
      {links.map(link => {
        return <NavLink href={link.to}>{link.name}</NavLink>
      })}
    </HeaderNav>
  </HeaderOuter>
)

export default Header
