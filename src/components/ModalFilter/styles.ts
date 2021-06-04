import styled from "styled-components"

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    select{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size:  1rem;

        & + select {
            margin-top: 1rem;
        }
    }

    button{
        height: 2rem;
        width: 4rem;
        margin-right: 1rem;
        border: 1px solid #d7d7d7;
        background: transparent;
        border-radius: 0.24rem;
        margin-top: 1rem;

    }

    transition: border-color 0.2s;

    &:hover{
        border-color: #aaa;
    }

    span{
        padding: 0.5rem;
        font-size: 1.1rem;
    }


`
