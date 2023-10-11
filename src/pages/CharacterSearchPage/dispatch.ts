// import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { gql, useLazyQuery } from '@apollo/client';
import { setSearchCharacter, setCurrentPage, setCardsCharacters, setSelectCards, setDeleteCards } from '../../store/characterSlice';
import { Character } from './interface';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


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

export function useCharactersDispatch() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchCharacter, selectCards, cardsCharacters, deleteCards} = useSelector((state: RootState) => state.characters);

    const [findByName, { data }] = useLazyQuery(FEED_SEARCH_QUERY);
// *******************************************************
    useEffect(() => {
        const saveCardsCharacters = localStorage.getItem('cardsCharacters');

        if (saveCardsCharacters) {
            const cardsCharacters = JSON.parse(saveCardsCharacters);
            dispatch(setCardsCharacters(cardsCharacters));
        }
        if (data?.characters?.results) {
            dispatch(setCardsCharacters(data.characters.results));
            localStorage.setItem('cardsCharacters', JSON.stringify(data.characters.results));
        }

        window.addEventListener('beforeunload', () => {
            localStorage.removeItem('cardsCharacters');
        });
        // return () => {
        //     window.removeEventListener('beforeunload', () => {
        //         localStorage.removeItem('cardsCharacters');
        //     });
        // };
    }, [data, dispatch]);
// ******************************************************* поиск персонажа
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        dispatch(setSearchCharacter(inputValue))
        if (inputValue.length > 2) {
            findByName({
                variables: { name: inputValue }
            })
            dispatch(setCurrentPage(1));
        }
    };
// ******************************************************* переход на другую страницу
    const handlePageChange = (newPage: number) => {
        findByName({
            variables: { name: searchCharacter, page: newPage },
        });
        dispatch(setCurrentPage(newPage));
    };
// ******************************************************* удаление карточки 
    const handleDeleteCard = (id: string) => {
        const updatedCards = cardsCharacters.filter((card: Character) => card.id !== id);
        dispatch(setCardsCharacters(updatedCards));
        const updateDeleteCards = [...deleteCards, id]
        dispatch(setDeleteCards(updateDeleteCards))
    };
// ******************************************************* добавление персонажа в party
    const handleAddCardToParty = (name: string, image: string) => {
        const isNameAlreadySelected = selectCards.some((cardInfo: Character) => cardInfo.name.includes('Rick') === name.includes('Rick') || cardInfo.name.includes('Morty') === name.includes('Morty'))

        if (!isNameAlreadySelected) {
            const updatedSelectCards = selectCards.length < 2
                ? [...selectCards, { name, image }]
                : selectCards;
                dispatch(setSelectCards(updatedSelectCards));
        }
    };
// ******************************************************* больше информации о персонаже
    const handleButtonClick = (character: Character) => {
        localStorage.setItem('personResult', JSON.stringify(character));
        navigate('/character-info')
    }

    return {
        handleChange,
        handlePageChange,
        handleDeleteCard,
        handleAddCardToParty,
        handleButtonClick,
        data
    }
}