import styled from 'styled-components';

export const CardPartyContent = styled.div`
    background: gray;
    width: 180px;
    height: 220px;
    border: 1px solid black;
    /* border-radius: 5px; */
    -webkit-box-shadow: 15px 15px 37px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 15px 37px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 15px 37px 0px rgba(0,0,0,0.75);
`

export const Title = styled.h3`
    color: greenyellow;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 24px;
    margin: 0;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`