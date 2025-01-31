import { createAction, props } from "@ngrx/store";
import { Album } from "./album.model";

export const loadAlbums = createAction('[Album] Load Albums');

export const loadAlbumsSuccess = createAction(
    '[Album] Load Albums Success',
    props<{ albums: Album[] }>()
);

export const loadAlbumsError = createAction(
    '[Album] Load Albums Error',
    props<{ error: string | undefined | null }>()
);