import styled from 'styled-components'

const Column = styled.div`
    width: ${props => props.col ?
        `calc(100% / (12 / ${props.col}))` :
        '100%'
    };
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 0px 8px;
`

export default Column
