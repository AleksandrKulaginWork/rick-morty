import React from "react";
import { ResultContent } from "./style";
import { ListOfCharactersProps } from "./interface";

export const ListOfCharacters = ({children}: ListOfCharactersProps) => {
    return (
        <ResultContent>
            {children}
        </ResultContent>
    )
}
