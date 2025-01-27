import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState, decrement, increment } from 'shared';

@Component({
  selector: 'app-default',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './default.component.html',
  styleUrl: './default.component.sass'
})
export class DefaultComponent implements OnInit {

  // counter$: Observable<number> = of(1);

  // constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  //   this.counter$ = this.store.select(state => state.counter);
  }

  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

}
