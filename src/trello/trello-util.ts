export function toTrelloImageUrl(imageUrl: string): string {
    return `${imageUrl}/170.png`;
}

export function toTrelloCardLink(card: any): string {
    return `**Card:** [${card.name}](https://trello.com/c/${card.shortLink})`;
}