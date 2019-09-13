import styled from 'styled-components'

import config from '../config'

const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    margin: auto;
    padding: 0px 8px;
    padding-left: ${config.sidebarWidth.desktop};
    box-sizing: border-box;

    @media screen and (min-width:1140px) {
        max-width: 1140px;
    }
`

export default Page
