import React from 'react';
import { InfoList, CharacterInfoPageContent, Image, ListItem, Text, Title } from './style';

export const CharacterInfoPage = () => {

    const personResultString = localStorage.getItem('personResult');
    if (personResultString !== null) {
        const personResult = JSON.parse(personResultString);
        const { image, name, status, species, gender, created } = personResult; 

    return (
        <CharacterInfoPageContent>
    
            <Image src={image} alt={name} />
            <InfoList>
                <ListItem>
                    <Title>Name</Title>
                    <Text>{name}</Text>
                </ListItem>

                <ListItem>
                    <Title>Status</Title>
                    <Text>{status}</Text>
                </ListItem>

                <ListItem>
                    <Title>Species</Title>
                    <Text>{species}</Text>
                </ListItem>

                <ListItem>
                    <Title>Gender</Title>
                    <Text>{gender}</Text>
                </ListItem>

                <ListItem>
                    <Title>Created</Title>
                    <Text>{created}</Text>
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
