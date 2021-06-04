import styled from 'styled-components';
import backgroundBeer from '../../assets/background-beer.jpg';
import backgroundMarvel from '../../assets/background-marvel.png'
import backgroundSpotiFy from '../../assets/background-spotify.jpg'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Beer = styled.div`
    flex: 1;
    width: 100%;
    background: url(${backgroundBeer}) no-repeat center;
    background-size: cover;

    &:hover{
        opacity: 0.5;
    }

`

export const Comics = styled.div`
    width: 100%;
    flex: 1;
    background: url(${backgroundMarvel}) no-repeat center;
    background-size: cover;

    &:hover{
        opacity: 0.7;
    }

`

export const Music = styled.div`
    width: 100%;    
    flex: 1;
    background: url(${backgroundSpotiFy}) no-repeat center;
    background-size: cover;

    &:hover{
        opacity: 0.7;
    }

`