export interface CardProps {
    name: string,
    imageUrl: string,
    onCardDelete: () => void,
    onCardClick: () => void,
    onButtonClick: () => void,
}