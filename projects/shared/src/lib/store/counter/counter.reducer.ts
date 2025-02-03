import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 10
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, (state) => ({
        ...state,
        counter: state.counter - 1
    })),
    on(reset, (state) => ({
        ...state,
        counter: 100
    }))
);