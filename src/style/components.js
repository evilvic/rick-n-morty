import styled from 'styled-components'
import { colors } from './index'

export const Nav = styled.nav`

    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;800&display=swap');

    width: 100vw;
    height: 250px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.black};
    
    img {
        width: 90vw;
    }
    
    section {

        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
            padding: 5px;
            font-family: 'Baloo 2', sans-serif;
            font-size: 1.8rem;
            color: ${colors.white};
            
            &.active {
                font-size: 2rem;
                font-weight: 800;
                color: ${colors.blue};
            }
        }

    }

    @media (min-width: 520px) {

        height: 100px;
        padding: 20px;
        flex-direction: row;

        img {
            width: 175px;
        }

        section {
            width: 50%;
        }

    }

`