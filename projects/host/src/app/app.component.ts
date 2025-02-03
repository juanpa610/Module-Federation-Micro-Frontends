import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AlbumState, AppState, CounterState, decrement, increment, loadAlbums, reset, selectAlbums, selectCounterValue, selectLoading, } from 'shared';
import { Album } from '../../../shared/src/lib/store/albums/album.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host';

  albums$!: Observable<Album[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  counter$: Observable<number> = of(1);


  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadAlbums());
    this.albums$ = this.store.select(selectAlbums);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(selectCounterValue);
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
