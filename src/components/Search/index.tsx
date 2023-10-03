import React, { useState } from "react";
import { SearchProps } from "./interface";
import { Input } from "./style";


export const Search = ({ name, type }: SearchProps) => {

    const [textState, setTextState] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextState(e.target.value)
    }

    return (
        <Input 
            name={name}
            type={type} 
            value={textState}
            placeholder='Cartoon character name'
            onChange={handleChange}/> 
    )
}