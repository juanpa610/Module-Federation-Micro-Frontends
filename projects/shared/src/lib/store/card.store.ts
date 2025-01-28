import { BehaviorSubject, Subject } from 'rxjs';
import { Card } from '../domain/card/card.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CardStore {

    private cards: Card[] = [];
    private subjectCards = new BehaviorSubject<Card[]>([
        {id: '43586793478578' , cardNumber: '123456785123'},
        {id: '43586793478578' , cardNumber: '123456782321'},
        {id: '43586793478578' , cardNumber: '123456787231'}
    ]);
    cards$ = this.subjectCards.asObservable();

    constructor() {
        console.warn('CardStore instantiated');
    }

    getCards(): Card[] {
        return this.cards;
    }

    addCard(card: Card): void {
        this.cards.push(card);
        this.subjectCards.next([...this.cards]);
    }

    updateCard(updatedCard: Card): void {
        const index = this.cards.findIndex((card) => card.id === updatedCard.id);
        if (index !== -1) {
            this.cards[index] = updatedCard;
        }
    }

    deleteCard(id: string): void {
        this.cards = this.cards.filter((card) => card.id !== id);
    }
}