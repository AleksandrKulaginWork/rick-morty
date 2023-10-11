import React from "react";
import { PartyContent, Title, BodyCards } from "./style";
import { CardParty } from './../CardParty/index';
import { PartyProps } from "./interface";

export const Party = ({ selectCards }: PartyProps) => {


    return (
        <PartyContent>
            {selectCards.length > 0 && <Title>Party</Title>}
            <BodyCards>

                {selectCards.map((cardInfo) => (
                    <CardParty key={cardInfo.name} image={cardInfo.image} title={cardInfo.name} />
                ))}
                
            </BodyCards>
        </PartyContent>
    )
}