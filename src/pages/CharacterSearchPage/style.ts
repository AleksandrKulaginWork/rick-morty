import styled from "styled-components";

export const Input = styled.input `
    max-width: 100%;
    padding: 22px 27px;
    font-size: 30px;
    box-sizing: border-box;
    border: 0px;
    text-transform: uppercase; 
    margin-bottom: 30px;
    opacity: 0.5;
    transition: 0.5s ease;
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 49%, rgba(255,255,255,0) 100%);
    
        &::placeholder{
            text-transform: none; 
    }
        &:focus {
            outline: none;
            opacity: 0.8;
}
`
export const Image = styled.img`
    max-width: 75%;
    margin: 0 auto;
`