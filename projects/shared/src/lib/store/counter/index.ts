import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export interface AppState {
  counter: number;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};

export * from './counter.actions';
export * from './counter.selectors';
// export * from './counter/counter.effects';