import { createGlobalStyle } from 'styled-components'

const size = {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
}

export const colors = {
    black: 'rgba(50, 50, 50, 1)',
    white: 'rgba(225, 225, 225, 1)',
    blue: 'rgba(5, 180, 205, 1)'
}

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 10px;
    }

    a {
        text-decoration: none;
    }
    
`