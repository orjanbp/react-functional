import React from 'react'
import styled from 'styled-components'

import NavLink from './nav-link'

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
