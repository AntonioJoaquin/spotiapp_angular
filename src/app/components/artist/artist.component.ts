import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};
  loading: boolean;


  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
    });
  }


  getArtista(id: string) {
    this.loading = true;

    this.spotifyService.getArtista(id)
      .subscribe(data => {
        this.artista = data;

        this.loading = false;
      });
  }

}
