import { Component, Input } from '@angular/core';
import { MovieItem } from 'src/app/core/interfaces/movie-item';
import { FavoriteMovieService } from 'src/app/core/services/favorite-movie.service';

@Component({
  selector: 'app-movie-card[movie]',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: MovieItem;

  constructor(
    private favoriteMovieService: FavoriteMovieService
  ) {}

  get favoriteMovieId(): number | null {
    return this.favoriteMovieService.getMovie();
  }

  public toggleFavoriteMovie(id: number): void {
    this.favoriteMovieService.toggleFavoriteMovie(id);
  }
}
