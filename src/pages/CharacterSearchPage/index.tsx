import React from "react";
import { Character } from "./interface";
import { Input, Image } from "./style";
import { Card } from "../../components/Card";
import { ListOfCharacters } from "../../components/ListOfCharacters";
import { Pagination } from '../../components/Pagination';
import { Party } from '../../components/Party';
import { useSelector } from 'react-redux';
// import { RootState } from "../../store/store";
import { useCharactersDispatch } from "./dispatch";
import { CharactersState } from "../../store/characterSlice";
import Logo from '../../assets/Logo.png';


export const CharacterSearchPage = () => {

    const { searchCharacter, currentPage, cardsCharacters, selectCards, deleteCards } = useSelector((state: CharactersState) => state.characters);

    const { handleChange, handlePageChange, handleDeleteCard, handleAddCardToParty, handleButtonClick, data } = useCharactersDispatch();
    
    return (
        <>
        <Image src={Logo}/>
            <Input
                name='search'
                type='text'
                value={searchCharacter}
                placeholder='Cartoon character name'
                onChange={handleChange} />

            <ListOfCharacters>
                {cardsCharacters
                    .filter((character: Character) => !deleteCards.includes(character.id))
                    .map((character: Character) => (
                <Card
                    key={character.id}
                    name={character.name}
                    imageUrl={character.image}
                    onCardDelete={() => handleDeleteCard(character.id)}
                    onCardClick={() => handleAddCardToParty(character.name, character.image)}
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
                selectCards={selectCards} />
        </>
    )
}