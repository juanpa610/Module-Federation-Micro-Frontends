import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState, decrement, increment, reset } from 'shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host';

  // counter$!: Observable<number>;
  counter$: Observable<number> = of(1);
  // time : NodeJS.Timeout | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(state => {
      return state.counter
    });
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
