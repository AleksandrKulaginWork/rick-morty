import styled from "styled-components";

export const Input = styled.input `
    max-width: 100%;
    padding: 22px 27px;
    font-size: 30px;
    box-sizing: border-box;
    border: 1px solid #A0A0A0;
    text-transform: uppercase; 
    margin-bottom: 30px;
    opacity: 0.5;
    transition: 0.5s ease;
    
        &::placeholder{
            text-transform: none; 
    }
        &:focus {
            outline: none;
            opacity: 0.8;
}
`