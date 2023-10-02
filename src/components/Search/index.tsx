import React, { useState } from "react";
import { SearchProps } from "./interface";
import { Input } from "./style";


export const Search = ({ name, type, placeholder }: SearchProps) => {

    const [textState, setTextState] = useState('');

    const handleChange = (e: any) => {
        setTextState(e.target.value)
    }

    return (
        <Input 
            name={name}
            type={type} 
            value={textState}
            placeholder={placeholder}
            onChange={handleChange}/> 
    )
}