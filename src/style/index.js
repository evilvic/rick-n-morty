import { createGlobalStyle } from 'styled-components'

export const colors = {
    pink: 'pink',
}

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: sans-serif;
        font-size: 10px;
        color: ${colors.pink}
    }
`