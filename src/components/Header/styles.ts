import styled from 'styled-components'
import backgroundBeer from '../../assets/background-beer.jpg';;

export const Container = styled.header`
    background: url(${backgroundBeer}) no-repeat;
    background-size: cover;

`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background: #000;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
    }
`;

