import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { increment } from './counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
    // constructor(private actions$: Actions) { }
    // logIncrement$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(increment),
    //         tap(() => console.log('Increment action dispatched'))
    //     ),
    //     { dispatch: false } // Indica que no se despacha una acción
    // );

}