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
    transparent: 'rgba(255, 255, 255, 0.85)',
    blue: 'rgba(5, 180, 205, 1)',
    pink: 'rgba(220, 80, 130, 1)',
    yellow: 'rgba(250, 210, 65, 1)',
    purple: 'rgba(160, 105, 180)'

}

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
    }

    a {
        text-decoration: none;
    }

    .container {
        width: 100vw;
        height: auto;
        padding: 35px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #register-bg {
        background-image: url(https://res.cloudinary.com/evilvic/image/upload/v1587221062/rick-n-morty/rnm-register-bg.jpg);
        background-size: cover;
        background-position:center;
    }
    
`