import { OnInit } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieItem } from 'src/app/core/interfaces/movie-item';
import { FavoriteMovieService } from 'src/app/core/services/favorite-movie.service';

@Component({
  selector: 'app-movie-card-modal',
  templateUrl: './movie-card-modal.component.html',
  styleUrls: ['./movie-card-modal.component.scss']
})
export class MovieCardModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public movie: MovieItem,
    private favoriteMovieService: FavoriteMovieService
  ) {}

  get favoriteMovieId(): number | null {
    return this.favoriteMovieService.getMovie();
  }

  ngOnInit(): void {
  }

  toggleFavoriteMovie(id: number): void {
    this.favoriteMovieService.toggleFavoriteMovie(id);
  }
}
