import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../pages/CharacterSearchPage/interface";

const initialState = {
    searchCharacter: '',
    currentPage: 1,
    cardsCharacters: [],
    selectCards: [],
    deleteCards: [],
}

export interface CharactersState {
    searchCharacter: string;
    currentPage: number;
    cardsCharacters: Character[];
    selectCards: string[];
    deleteCards: string[];
}

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setSearchCharacter: (state, action) => {
            state.searchCharacter = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCardsCharacters: (state, action) => {
            state.cardsCharacters = action.payload;
        },
        setSelectCards: (state, action) => {
            state.selectCards = action.payload;
        },
        setDeleteCards: (state, action) => {
            state.deleteCards = action.payload;
        }
    }
})

export const {setSearchCharacter, setCurrentPage, setCardsCharacters, setSelectCards, setDeleteCards} = characterSlice.actions;
export default characterSlice.reducer;