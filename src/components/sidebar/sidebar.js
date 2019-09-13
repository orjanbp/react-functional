import React from 'react'
import styled from 'styled-components'

import config from '../../config'
import Text from '../text'

import NavLink from './nav-link'

const SidebarOuter = styled.div`
  position: fixed;
  height: 100%;
  width: ${config.sidebarWidth.desktop};
  background-color: #2d383c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.27);
  padding: 16px;
  box-sizing: border-box;
`

const SidebarNav = styled.nav`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #c8d6e5;
`

const Sidebar = ({ links }) => (
  <SidebarOuter>
    <Text.h3>Functional React Experiments</Text.h3>
    <Text.sub>
      A collection of React experiments using functional components.
    </Text.sub>
    <SidebarNav>
      {links.map(link => {
        return <NavLink to={link.to}>{link.name}</NavLink>
      })}
    </SidebarNav>
  </SidebarOuter>
)

export default Sidebar
