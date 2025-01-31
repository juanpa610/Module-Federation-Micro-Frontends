import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as AlbumActions from "./album.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { AlbumService } from "../../services/album.service";

@Injectable()
export class AlbumEffects {
  constructor(private actions$: Actions, private albumService: AlbumService) {}

  loadAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.loadAlbums),
      mergeMap(() =>
        this.albumService.getAlbums().pipe(
          map((albums) => AlbumActions.loadAlbumsSuccess({ albums })),
          catchError((error) =>
            of(AlbumActions.loadAlbumsError({ error: error.message }))
          )
        )
      )
    )
  );
}
