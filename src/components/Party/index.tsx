import React from "react";
import { PartyContent, Title, BodyCards } from "./style";
import { CardParty } from './../CardParty/index';

export const Party = () => {
    return (
        <PartyContent>
            <Title>Party</Title>
            <BodyCards>
                <CardParty image={'url'} title='Rick'/>
                <CardParty image={'url'} title='Morty'/>
            </BodyCards>
        </PartyContent>
    )
}