import { Injectable } from "@angular/core";
import { CardGateway } from "../domain/card/card.gateway";
import { Card } from "../domain/card/card.interface";


@Injectable({
    providedIn: 'root',
})
export class CardUseCases {

    constructor(private _cardGateway: CardGateway) { }

    getCards() {
        return this._cardGateway.getCards();
    }

    addCard(card: Card) {
        this._cardGateway.addCard(card);
    }

    updateCard(card : Card) {
        this._cardGateway.updateCard(card);
    }

    deleteCard(id : string) {
        this._cardGateway.deleteCard(id);
    }
}