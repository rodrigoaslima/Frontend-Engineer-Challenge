import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    flex-direction: column;

    button{
        height: 2rem;
        width: 4rem;
        margin-right: 1rem;
        margin-left: 1rem;
        border: 1px solid #d7d7d7;
        background: transparent;
        border-radius: 0.24rem;
        margin-top: 1rem;
    }

    li{
        padding: 2rem 0 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input{
            margin-right: 2rem;
        }

        img{
            width: 3.5rem;
            height: 3.5rem;
            padding-right: 1rem;
        }
        
    }
    li:nth-child(odd){background: lightgray};

    

`;
