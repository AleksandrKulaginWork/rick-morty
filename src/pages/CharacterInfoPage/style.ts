import styled from "styled-components";

export const CharacterInfoPageContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 140px;
`
export const Image = styled.img`
    align-self: center;
    -webkit-box-shadow: 25px 25px 41px 9px rgba(0,0,0,0.75);
    -moz-box-shadow: 25px 25px 41px 9px rgba(0,0,0,0.75);
    box-shadow: 25px 25px 41px 9px rgba(0,0,0,0.75);
    border: 2px solid black;
    border-radius: 15px;
`
export const InfoList = styled.ul`
    display: flex;
    flex-direction: column;
`
export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin: 16px 0;
`
export const Text = styled.p`
    color: white;
    margin: 0;
`
export const Title = styled.h3`
    color: greenyellow;
    margin: 0;
`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: white;
`
