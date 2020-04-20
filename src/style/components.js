import styled from 'styled-components'
import { colors } from './index'

export const StyledNav = styled.nav`

    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

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
            color: ${colors.yellow};
            
            &.active {
                font-size: 2rem;
                font-weight: 800;
                color: ${colors.blue};
            }
        }

    }

    @media (min-width: 520px) {

        position: fixed;

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

export const StyledForm = styled.form`

    width: 90%;
    height: 600px;
    padding: 35px 0;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.transparent};

    h2 {
        width: 80%;
        padding: 10px;
        font-family: 'Baloo 2', sans-serif;
        font-size: 3.5rem;
        color: ${colors.purple};
        text-align: center;
    }

    p {
        width: 80%;
        padding: 5px;
        margin-bottom: 30px;
        font-size: 2.5rem;
        font-weight: 400;
        color: ${colors.pink};
        text-align: center;
    }

    label {
        width: 80%;
        margin-bottom: 5px;
        font-size: 1.5rem;
        color: ${colors.blue};
    }

    input {
        width: 80%;
        height: 30px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
    }

    button {
        width: 80%;
        height: 40px;
        margin: 20px 0;
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${colors.white};
        background-color: ${colors.pink};
    }

    @media (min-width: 520px) {
        width: 460px;
    }

`

export const StyledProfile = styled.article`

    width: 90%;
    height: 600px;
    padding: 35px 0;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.transparent};

    h2 {
        width: 80%;
        padding: 10px;
        font-family: 'Baloo 2', sans-serif;
        font-size: 3.5rem;
        color: ${colors.purple};
        text-align: center;
    }

    p {
        width: 80%;
        padding: 5px;
        margin-bottom: 30px;
        font-size: 2.5rem;
        font-weight: 400;
        color: ${colors.pink};
        text-align: center;
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 25px;
    }

    h3 {
        width: 80%;
        font-family: 'Baloo 2', sans-serif;
        font-size: 2.5rem;
        color: ${colors.blue};
        text-align: center;
    }

    .label {
        width: 80%;
        padding: 5px;
        margin-bottom: 25px;
        font-size: 1rem;
        font-weight: 400;
        color: ${colors.pink};
        text-align: center;
    }

    button {
        width: 80%;
        height: 40px;
        margin: 20px 0;
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${colors.white};
        background-color: ${colors.pink};
    }

    @media (min-width: 520px) {
        width: 460px;
    }

`

export const StyledGallery = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;

    @media (min-width: 520px) {
        width: 90%;
    }
`

export const StyledCard = styled.article`

    width: 300px;
    height: 400px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.black};

    img {
        width: 280px;
        height: 280px;
        margin-bottom: 5px;
    }

    h3 {
        width: 280px;
        padding-top: 10px;
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        color: ${colors.yellow};
        text-align: center;
    }

    h4 {
        width: 280px;
        font-size: 1.5rem;
        color: ${colors.white};
        text-align: center;
        margin-bottom: 5px;
    }

    a {
        font-size: 1.5rem;
        color: ${colors.blue}
    }

`

export const StyledTable = styled.article`

    width: 300px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${colors.black};

    img {
        width: 280px;
        height: 280px;
        margin-bottom: 30px;
    }

    table {
        width: 90%;
        border-collapse: collapse;
        margin-bottom: 25px;
    }

    th {
        height: 80px;
        width: 40%;
        border-bottom: 1px solid ${colors.yellow};
        border-right: 1px solid ${colors.yellow};
        color: ${colors.yellow};
        font-size: 1.5rem;
    }

    td {
        height: 80px;
        border-bottom: 1px solid ${colors.yellow};
        text-align: right;
        color: ${colors.white};
        font-size: 1.5rem;
    }

    .no-border {
        border-bottom: 0;
    }

    @media (min-width: 620px) {
        padding-top: 15px;
        width: 620px;

        img {
            margin-right: 10px;
        }

        table {
            width: 300px;
            border-collapse: collapse;
        }
    }

`
export const StyledEpisodes = styled.table`

    width: 300px;
    border: 1px solid ${colors.yellow};
    background-color: ${colors.black};
    border-collapse: collapse;

    thead {
        background-color: ${colors.yellow};

        .table-title {
            font-size: 1.2rem;
            text-align: center;
            padding: 10px;
        }
    }

    th, td {
        border: 1px solid ${colors.yellow};
        height: 80px;
        font-size: 1.5rem;
    }

    td {
        color: ${colors.white};
    }

    .episode {
        padding-left: 10px;
    }

    .date{
        text-align: center;
        font-size: 1rem;
        padding: 3px;
    }

    .more {
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .yellow {
        background-color: ${colors.yellow};
    }

    .description {
        text-align: center;
    }

    a {
        font-size: 1.2rem;
        color: ${colors.blue};
        text-align: center;
    }

    @media (min-width: 520px) {
        width: 600px;
    }
`