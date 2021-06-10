import styled from "styled-components";

import background from '../../assets/ComicBG2.jpg'
import headerBackground from '../../assets/ComicBG.jpg'
import cityImg from '../../assets/SkyLine@3x.png'
import captainMarvel from '../../assets/CaptainMarvel.png'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${background});
    height: 100vh;
    display: flex;

    header{
        background: url(${headerBackground}) no-repeat center;
        background-size: cover;
        height: 15rem;
        width: 100%;
       
        div{

            display: flex;
            justify-content: center;
            align-items: center;
            background: url(${cityImg}) center;;
            height: 15rem;
            width: 100%;

            h1{
                font-family: ccbiffbamboom, sans-serif;
                color: black;
                margin: 30px 0 -1em 0;
                text-shadow: -1px -1px yellow, 1px 1px orange, 2px 2px orange;
                -webkit-transform: rotate(-5deg) skew(-10deg, 0);
                -moz-transform: rotate(-5deg) skew(-10deg, 0);
                -ms-transform: rotate(-5deg) skew(-10deg, 0);
                -o-transform: rotate(-5deg) skew(-10deg, 0);
                transform: rotate(-5deg) skew(-10deg, 0);
                padding-bottom: 0px;
                float: left;
                font-size: 60px;
            }
        
        }

    }

`;

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 2rem;
    width: 100%;

    color: #d7d7d7;
    background-color: #2b3d4f;

    form{
        display: flex;
        justify-content: center;
        align-items: center;

        input{
            height: 2rem;
            width: 100%;
            padding: 0 1.5rem;
            height: 2rem;
            border-radius: 0.25rem;
            margin-right: 1rem;
        }

        button{
            height: 2rem;
            width: 5rem;
            margin-right: 1rem;
            border: 1px solid #d7d7d7;
            background: transparent;
            border-radius: 0.24rem;
            color: #d7d7d7;
        }
            
    }    

`; 

export const Card = styled.div`
    background-color: #f2c94d;
    padding: 0 0 0 1rem;
    height: 20rem ;
    width: 40rem;
    margin-top: 1rem;
    display: flex;
    align-items: stretch;

    div{
        flex: 1;
        width: 100%;
    }

`;
