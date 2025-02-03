import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


export const selectAlbumState = (state: AppState) => state.albums

export const selectAlbums = createSelector(
  selectAlbumState,
  (state) => state.albums
);

export const selectLoading = createSelector(
  selectAlbumState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAlbumState,
  (state) => state.error
);
