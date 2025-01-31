import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AlbumEffects, albumReducer, reducers, AppState } from 'shared';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideStore(reducers),
    provideStore({album : albumReducer, ...reducers }),
    provideEffects([AlbumEffects]),
    provideStoreDevtools({
      name: 'Counter NGRX',
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    }),
  ]
};
