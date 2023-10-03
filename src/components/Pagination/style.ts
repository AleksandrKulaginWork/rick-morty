import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 20px;
    gap: 5px;
    padding: 7px 10px;
    border-radius: 10px;
    border: none;

    &:hover{
        background: greenyellow;
    }
`
export const PaginationContent = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
`

