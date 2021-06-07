import styled from "styled-components";

export const Container = styled.div`
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
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 15rem;
    row-gap: 5rem;
    height: 100%;
    margin-top: 4rem;

    div{
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
`;