import React from "react";
import { CardPartyContent, Image, Title } from "./style";
import { CardPartyProps } from "./interface";

export const CardParty = ({title, image}: CardPartyProps) => {
    return (
        <CardPartyContent>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
        </CardPartyContent>
    )
}