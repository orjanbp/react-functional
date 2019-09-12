import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const HeaderOuter = styled.header`
  display: flex;
  height: 64px;
  width: 100%;
  background-color: #2d383c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.27);
`

const HeaderNav = styled.nav``

const NavLink = styled(Link)`
  display: inline-block;
`

const Header = ({ links }) => (
  <HeaderOuter>
    <HeaderNav>
      {links.map(link => {
        return <NavLink to={link.to}>{link.name}</NavLink>
      })}
    </HeaderNav>
  </HeaderOuter>
)

export default Header
