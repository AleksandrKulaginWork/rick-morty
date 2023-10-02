import React from "react";
import { CardPartyContent, Title } from "./style";
import { CardPartyProps } from "./interface";

export const CardParty = ({title, image}: CardPartyProps) => {
    return (
        <CardPartyContent>
            <Title>{title}</Title>
            <img src={image} alt="" />
        </CardPartyContent>
    )
}