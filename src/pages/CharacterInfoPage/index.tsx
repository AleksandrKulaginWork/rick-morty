import React from 'react';
import { InfoList, CharacterInfoPageContent, Image, ListItem, Text, Title, Line } from './style';

export const CharacterInfoPage = () => {

    const personResultString = localStorage.getItem('personResult');

    if (personResultString !== null) {
        const personResult = JSON.parse(personResultString);
        const { image, name, status, species, gender, created } = personResult; 

        const dateObject = new Date(created);
        const formattedDate = dateObject.toISOString().replace("T", " ");


    return (
        <CharacterInfoPageContent>
            <Image src={image} alt={name} />
            <InfoList>
                <ListItem>
                    <Title>Name :</Title>
                    <Text>{name}</Text>
                </ListItem>
                <Line/>
                <ListItem>
                    <Title>Status :</Title>
                    <Text>{status}</Text>
                </ListItem>
                <Line/>
                <ListItem>
                    <Title>Species :</Title>
                    <Text>{species}</Text>
                </ListItem>
                <Line/>
                <ListItem>
                    <Title>Gender :</Title>
                    <Text>{gender}</Text>
                </ListItem>
                <Line/>
                <ListItem>
                    <Title>Created :</Title>
                    <Text>{formattedDate}</Text>
                </ListItem>
            </InfoList>
        </CharacterInfoPageContent>
        )
    } else {
        return (
            <div>
                Page not found
            </div>
        )
    }
}
