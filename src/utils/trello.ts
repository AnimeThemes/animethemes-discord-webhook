import { TrelloCard } from 'types/trello';

export function toTrelloImageUrl(imageUrl: string): string {
    return `${imageUrl}/170.png`;
}

export function toTrelloCardLink(card: TrelloCard): string {
    return `**Card:** [${card.name}](https://trello.com/c/${card.shortLink})`;
}
