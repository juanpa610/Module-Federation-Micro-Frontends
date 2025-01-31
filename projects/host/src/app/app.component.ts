import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AlbumState, AppState, decrement, increment, loadAlbums, reset,  } from 'shared';
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

  albums$!: Observable<any>;
  albums!: Album[];
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  counter$: Observable<number> = of(1);


  constructor(private store: Store<AppState>, private albumStore: Store<AlbumState>) {
    this.albumStore.dispatch(loadAlbums());
    this.albums$ = this.albumStore.select(state => state);
    // this.loading$ = this.albumStore.select();

   this.albums$.subscribe(albums => {
     console.log(albums);
     this.albums = albums.album.albums;
   });
  }

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
