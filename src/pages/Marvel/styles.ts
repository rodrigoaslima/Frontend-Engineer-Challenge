import styled from "styled-components";

import backgroundMarvelDeshboard from "../../assets/background-marvel.jpg";

export const Container = styled.div`
    background: url(${backgroundMarvelDeshboard}) no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;

    header{
        background-color: var(--red);
        width: -webkit-fill-available;
        margin: 0 auto;
        color: var(--shape);
        padding: 0 1rem 0 1rem;
    }


`;

export const Menu = styled.div`
    background-color: #FFFFFF;
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 15rem;
    row-gap: 5rem;
    height: 100%;
    max-width: 70%;
    width: 100%;

    
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div{
        margin-top: 2rem;
        width: 17rem;
        height: 17rem;
        border: solid;
        border-radius: 10rem;
        overflow: hidden;
        position: relative;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.7)
        }

        cursor: pointer;

        img{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }

    h3{
        margin-top: 1rem;
    }
`;