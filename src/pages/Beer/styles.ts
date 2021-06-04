import styled from 'styled-components';

export const Container = styled.ul`
    

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
