import React from "react";
import { CardProps } from "./interface";
import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { ButtonClose, CardResultsContent, Image, ButtonLink } from "./style";
// import { useNavigate } from 'react-router-dom';
import { FaInfo } from "react-icons/fa";

export const Card = ({ imageUrl, name, onCardDelete, onCardClick, onButtonClick }: CardProps) => {

    return (
        <CardResultsContent onClick={() => onCardClick()}>
            <ButtonClose onClick={() => onCardDelete()}>
                <IconClose size={15} />
            </ButtonClose>

            <Image src={imageUrl} alt={name} />

            <ButtonLink onClick={() => onButtonClick()}>
                <FaInfo size={15} color="black"/>
            </ButtonLink>
        </CardResultsContent>
    )
}