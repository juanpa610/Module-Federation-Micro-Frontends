import { Injectable } from '@angular/core';
import { CardGateway } from '../../../domain/card/card.gateway';
import { Card } from '../../../domain/card/card.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { CardStore } from '../../../store/card.store';


@Injectable({
    providedIn: 'root'
})
export class CardService extends CardGateway {

    constructor(private cardStore: CardStore) {
        super();
    }
    
    getCards(): Card[] {
        return this.cardStore.getCards();
    }

    addCard(card: Card): void {
        this.cardStore.addCard(card);
    }

    updateCard(updatedCard: Card): void {
        this.cardStore.updateCard(updatedCard);
    }

    deleteCard(id: string): void {
        this.cardStore.deleteCard(id);
    }


    // TODO: remove
    // constructor() {
    //     super();
    //     console.error('CardService instantiated');
    // }

    // private cards: Card[] = [];
    // private subjectCards = new Subject<Card[]>();
    // cards$ = this.subjectCards.asObservable();

    // getCards(): Card[] {
    //     return this.cards;
    // }

    // addCard(card: Card): void {
    //     this.cards.push(card);
    //     console.log(this.cards);
    //     this.subjectCards.next([...this.cards]);
    // }

    // updateCard(updatedCard: Card): void {
    //     const index = this.cards.findIndex((card) => card.id === updatedCard.id);
    //     if (index !== -1) {
    //         this.cards[index] = updatedCard;
    //     }
    // }

    // deleteCard(id: string): void {
    //     this.cards = this.cards.filter((card) => card.id !== id);
    // }
}

