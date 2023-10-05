import styled from 'styled-components';

export const PaginationContent = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 20px;
    gap: 5px;
    padding: 7px 10px;
    border-radius: 10px;
    border: none;

    &:not(:disabled):hover{
        background: greenyellow;
    }
`

export const Span = styled.span`
    font-weight: 700;
    font-size: 18px;
`

export const Paragraph = styled.span`
    padding: 0;
`