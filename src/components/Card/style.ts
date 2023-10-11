import styled from 'styled-components';

export const ButtonClose = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center; 
    justify-content: center;
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: 0%;
    transition: 0.5s ease;
    cursor: pointer;
    border: 1.5px solid black;
    &:hover {
        background: red;
        opacity: 100%;
    }
`

export const ButtonLink = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    right: 8px;
    bottom: 8px;
    background: white;
    display: flex;
    align-items: center; 
    justify-content: center;
    opacity: 0%;
    transition: 0.5s ease;
    cursor: pointer;
    border: 1.5px solid black;
    &:hover {
        background: greenyellow;
        opacity: 100%;
        transition: 0.3s ease;
    }
`

export const CardResultsContent = styled.div`
    width: 180px;
    height: 220px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
    overflow: hidden;
    -webkit-box-shadow: 15px 15px 37px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 15px 37px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 15px 37px 0px rgba(0,0,0,0.75);
    &:hover {
        ${ButtonClose} {
            opacity: 75%;
        }
        ${ButtonLink} {
            opacity: 75%;
        }
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

