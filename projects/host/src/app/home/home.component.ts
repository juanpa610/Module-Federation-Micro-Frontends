import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, pipe } from 'rxjs';
import { CounterState, increment, decrement, reset } from 'shared';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  // counter$!: Observable<number>;
  counter$: Observable<number> = of(1);


  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
    // this.counter$ = this.store.select(state => state.counterr);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());

  }



  reset() {
    this.store.dispatch(reset());
  }


}
