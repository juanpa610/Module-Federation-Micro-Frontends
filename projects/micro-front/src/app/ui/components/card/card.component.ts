import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card, CardUseCases } from 'shared-library-cards';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cardForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(12)]),
  });

  constructor(private cardUseCase: CardUseCases) {}

  addCard(): void {
    if (this.cardForm.valid) {
      const newCard: Card = {
        id: crypto.randomUUID(),
        cardNumber: this.cardForm.value.cardNumber!,
      };
      this.cardUseCase.addCard(newCard);
      this.cardForm.reset();
    }
  }

}
