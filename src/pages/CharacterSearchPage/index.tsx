import React, { useEffect, useState } from "react";
import { Character } from "./interface";
import { Input } from "./style";
import { gql, useLazyQuery } from '@apollo/client';
import { Card } from "../../components/Card";
import { ListOfCharacters } from "../../components/ListOfCharacters";
import { Pagination } from '../../components/Pagination';
import { Party } from '../../components/Party';
import { useNavigate } from 'react-router-dom';

const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery( $page: Int, $name: String!) {
        characters( page: $page, filter: { name: $name }) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                image
                created
            }
        }
    } 
`;

export const CharacterSearchPage = () => {

    const [findByName, { data }] = useLazyQuery(FEED_SEARCH_QUERY);
    const navigate = useNavigate();

    const [textState, setTextState] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsChatacters, setCardsChatacters] = useState<Character[]>([]);
    const [selectCards, setSelectCards] = useState<{name: string; image: string;}[]>([])
    
    useEffect(() => {
        const saveCardsCharacters = localStorage.getItem('cardsCharacters');
        if(saveCardsCharacters) {
            const cardsCharacters = JSON.parse(saveCardsCharacters);
            setCardsChatacters(cardsCharacters);
        } 
        if (data?.characters?.results) {
            setCardsChatacters(data.characters.results);
            localStorage.setItem('cardsCharacters', JSON.stringify(data.characters.results));
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setTextState(inputValue);
        if (inputValue.length > 2) {
            findByName({
                variables: { name: inputValue }
            })
        } 
    }

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        findByName({
            variables: { name: textState, page: newPage },
        });
    };

    const deleteCard = (id: string) => {
        setCardsChatacters((cards) => cards.filter((card) => card.id !== id));
    };
    
    const addCardToParty = (name: string, image: string) => {
        const isNameAlreadySelected = selectCards.some((cardInfo) => cardInfo.name.includes('Rick') === name.includes('Rick') || cardInfo.name.includes('Morty') === name.includes('Morty'))

            if(!isNameAlreadySelected) {
                setSelectCards((selectCards) => {
                    if(selectCards.length < 2) {
                        return [...selectCards, {name, image}];
                    }
                    return selectCards;
                })
            }
    }

    const handleButtonClick = (character: Character) => {
        localStorage.setItem('personResult', JSON.stringify(character));
        navigate('/character-info')
    }

    return (
        <>
            <Input
                name='search'
                type='text'
                value={textState}
                placeholder='Cartoon character name'
                onChange={handleChange} />

            <ListOfCharacters>
                {cardsChatacters.map((character: Character) => (
                    <Card 
                        key={character.id}
                        name={character.name} 
                        imageUrl={character.image}
                        onCardDelete={() => deleteCard(character.id)}
                        onCardClick={() => addCardToParty(character.name, character.image)}
                        onButtonClick={() => handleButtonClick(character)} />
                ))}
            </ListOfCharacters>

            {data?.characters?.info?.pages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    maxPages={data.characters.info.pages}
                    onPageChange={handlePageChange}
                />
            )}

            <Party 
                selectCards={selectCards}/>
        </>
    )
}