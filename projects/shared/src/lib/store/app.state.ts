import { ActionReducerMap } from "@ngrx/store";
import { counterReducer, CounterState } from "./counter/counter.reducer";
import { albumReducer, AlbumState } from "./albums/album.reducer";



export interface AppState {
    counter: CounterState;
    albums: AlbumState;
}


export const appReducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
    albums: albumReducer
}