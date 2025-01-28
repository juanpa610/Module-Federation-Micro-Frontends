import { Card } from './card.interface';

export abstract class CardGateway {
    abstract getCards(): Card[];
    abstract addCard(card: Card): void;
    abstract updateCard(card: Card): void;
    abstract deleteCard(id: string): void;
}