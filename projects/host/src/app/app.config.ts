import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { AlbumEffects, appReducers } from 'shared';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideStore(reducers),
    provideStore(appReducers),
    provideEffects([AlbumEffects]),
    provideStoreDevtools({
      name: 'Counter NGRX',
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    }),
  ]
};
