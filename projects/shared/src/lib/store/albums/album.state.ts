import { ActionReducerMap } from "@ngrx/store";
import { Album } from "./album.model";
import { albumReducer } from "./album.reducer";


export interface AlbumState {
    albums: Album[];
    loading: boolean;
    error: string | undefined | null; 
}


export const albumReducerState: ActionReducerMap<{ albums: AlbumState }> = {
  albums: albumReducer,
};

export * from "./album.effects";
export * from "./album.actions";
export * from "./album.selectors";
export * from "./album.reducer";