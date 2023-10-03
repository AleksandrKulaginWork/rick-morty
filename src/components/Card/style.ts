import styled from 'styled-components';

export const CardResultsContent = styled.div`
    width: 180px;
    height: 220px;
    position: relative;
`

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
    opacity: 75%;

    &:hover {
        opacity: 100%;
    }
` 

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`