import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

export const selectCounter = (state: AppState) => state.counter

export const selectCounterValue = createSelector(
  selectCounter,
  (counter) => counter
); 