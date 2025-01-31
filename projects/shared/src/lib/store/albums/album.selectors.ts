import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AlbumState } from "./album.state";


export const selectAlbumState = (state: AlbumState) => state.albums

// export const selectAlbums = createSelector(
//   selectAlbumState,
//   (state) => state.albums
// );

// export const selectLoading = createSelector(
//   selectAlbumState,
//   (state) => state.loading
// );

// export const selectError = createSelector(
//   selectAlbumState,
//   (state) => state.error
// );
