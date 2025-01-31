import { createReducer, on } from "@ngrx/store";

import * as AlbumActions from './album.actions';
import { AlbumState } from "./album.state";

const initialState : AlbumState = {
    albums: [],
    loading: false,
    error: null
}

export const albumReducer = createReducer(
    initialState, 

    on(AlbumActions.loadAlbums, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(AlbumActions.loadAlbumsSuccess, (state, { albums }) => ({
        ...state,
        albums,
        loading: false,
        error: null
    })),

    on(AlbumActions.loadAlbumsError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))

)