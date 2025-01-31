import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Album } from "../store/albums/album.model";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  getAlbums(): Observable<Album[]> {
    return of([
      { id: 1, title: "Moon", artist: "Pink" },
      { id: 2, title: "Road", artist: "The" }
    ]);
  }
}
