import React, { useState } from "react";
import { Character, SearchProps } from "./interface";
import { Input } from "./style";
import { gql, useLazyQuery } from '@apollo/client';
import { Card } from './../Card/index';
import { ListOfCharacters } from "../ListOfCharacters";
import { Pagination } from './../Pagination/index';

const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery( $page: Int!, $name: String!) {
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

    const [textState, setTextState] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [findByName, { data }] = useLazyQuery(FEED_SEARCH_QUERY);

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


    return (
        <>
            <Input
                name={name}
                type={type}
                value={textState}
                placeholder='Cartoon character name'
                onChange={handleChange} />

            <ListOfCharacters>
                {data && data.characters.results.map((character: Character) => (
                    <Card key={character.id} name={character.name} imageUrl={character.image} />
                ))}
            </ListOfCharacters>

            {data && data.characters.info.pages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    maxPages={data.characters.info.pages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    )
}