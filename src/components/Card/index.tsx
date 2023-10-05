import React from "react";
import { CardProps } from "./interface";
import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { ButtonClose, CardResultsContent, Image } from "./style";

export const Card = ({ imageUrl, name, onDelete }: CardProps) => {

    return (
        <CardResultsContent>
            <ButtonClose onClick={()=> onDelete()}>
                <IconClose size={15} />
            </ButtonClose>
            <Image src={imageUrl} alt={name} />
        </CardResultsContent>
    )
}