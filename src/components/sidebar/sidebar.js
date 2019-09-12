import React from 'react'
import styled from 'styled-components'

import NavLink from './nav-link'

const SidebarOuter = styled.div`
  position: fixed;
  height: 100%;
  width: 240px;
  background-color: #2d383c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.27);
`

const SidebarNav = styled.nav`
  padding: 16px;
`

const Sidebar = ({ links }) => (
  <SidebarOuter>
    <SidebarNav>
      {links.map(link => {
        return <NavLink to={link.to}>{link.name}</NavLink>
      })}
    </SidebarNav>
  </SidebarOuter>
)

export default Sidebar
