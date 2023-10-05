import React, { useEffect, useState } from "react";
import { Character, SearchProps } from "./interface";
import { Input } from "./style";
import { gql, useLazyQuery } from '@apollo/client';
import { Card } from './../Card/index';
import { ListOfCharacters } from "../ListOfCharacters";
import { Pagination } from './../Pagination/index';
import { Party } from './../Party/index';

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
                image
            }
        }
    } 
`;

export const Search = ({ name, type }: SearchProps) => {

    const [findByName, { data }] = useLazyQuery(FEED_SEARCH_QUERY);

    const [textState, setTextState] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsChatacters, setCardsChatacters] = useState<Character[]>([]);
    const [selectCards, setSelectCards] = useState<{name: string; image: string;}[]>([])
    
    useEffect(() => {
        if (data?.characters?.results) {
            setCardsChatacters(data.characters.results);
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

    // const addCardToParty = (name: string, image: string) => {
    //     const isNameAlreadySelected = selectCards.some((cardInfo) => cardInfo.name === name)

    //     if(name.includes('Rick') || name.includes('Morty')) {
    //         if(!isNameAlreadySelected) {
    //             setSelectCards((selectCards) => {
    //                 if(selectCards.length < 2) {
    //                     return [...selectCards, {name, image}];
    //                 }
    //                 return selectCards;
    //             })
    //         }
    //     }
    // }
    
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

    return (
        <>
            <Input
                name={name}
                type={type}
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
                        onCardClick={() => addCardToParty(character.name, character.image)} />
                ))}
            </ListOfCharacters>

            {data && data.characters.info.pages > 1 && (
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