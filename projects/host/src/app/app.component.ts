import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card, CardStore, MaskCardNumberPipe } from 'shared-library-cards-test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MaskCardNumberPipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'host';
  cards: Card[] = [];

  constructor(private cardService: CardStore) {
  }

  ngOnInit(): void {
    this.cardService.cards$.subscribe((cards) => {
      this.cards = cards;
    });
  }

}
