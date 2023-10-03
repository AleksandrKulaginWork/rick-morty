import React from "react";
import { ResultContent } from "./style";
// import { Card } from '../Card/index';
import { ListOfCharactersProps } from "./interface";

export const ListOfCharacters = ({children}: ListOfCharactersProps) => {
    return (
        <ResultContent>
            {children}
        </ResultContent>
    )
}
