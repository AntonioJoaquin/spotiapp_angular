import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  loading: boolean;

  error = false;
  errorMessage: string;


  constructor(private spotifyService: SpotifyService) {
    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;

        this.loading = false;
      },
      (errorInfo) => {
        this.loading = false;
        this.error = true;

        this.errorMessage = errorInfo.error.error.message;
      });
  }

}
